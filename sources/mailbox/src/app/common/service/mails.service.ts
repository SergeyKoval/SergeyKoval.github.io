import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import {AuthenticationService} from './authentication.service';
import {ContactsService} from './contacts.service';
import {MenuService} from './menu.service';

import 'rxjs/add/operator/map';

@Injectable()
export class MailsService implements Resolve<Mail> {
  private readonly COLLECTION_NAME: string = '/mails';

  private _mailsQ: Observable<Mail[]>;
  private _unreadMailsQ: Observable<Mail[]>;
  private _mailsQP: Subject<string> = new Subject();

  public constructor(
    private _authenticationService: AuthenticationService,
    private _menuService: MenuService,
    private _formBuilder: FormBuilder,
    private _af: AngularFire
  ) {
    this._mailsQ = this._af.database.list(this.COLLECTION_NAME, {
      query: {
        orderByChild: 'ownerType',
        equalTo: this._mailsQP
      }
    }).map((mails: Mail[]) => {
      mails.sort((first: Mail, second: Mail) => second.time - first.time);
      return mails;
    });

    this._unreadMailsQ = this._af.database.list(this.COLLECTION_NAME, {
      query: {
        orderByChild: 'read',
        equalTo: false
      }
    });
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mail> {
    return this.getMail(route.queryParams.id).first();
  }

  public initMailForm(type: string, mail: Mail, typeAll: string): FormGroup {
    const profile: Profile = this._authenticationService.authenticatedProfile;
    const owner: string = type === 'Compose' ? profile.$key : mail.owner;
    const myContact: Contact = {email: profile.email, firstName: profile.firstName, lastName: profile.lastName};

    let topic: string;
    let body: string;
    let receivers: Contact[];
    switch (type) {
      case 'Compose':
        topic = '';
        body = '';
        receivers = [];
        break;
      case 'Forward':
        topic = `FW: ${mail.topic}`;
        body = `\n-----------\n${mail.body}`;
        receivers = [];
        break;
      case 'Reply':
        topic = `RE: ${mail.topic}`;
        body = `\n-----------\n${mail.body}`;
        receivers = this.prepareReceivers(mail, myContact, typeAll);
        break;
    }


    return this._formBuilder.group({
      owner: [owner],
      type: [''],
      ownerType: [''],
      favorite: [false],
      read: [true],
      sender: [myContact],
      time: [''],
      body: [body],
      topic: [topic],
      receivers: [receivers],
    });
  }

  public getMail(id: string): FirebaseObjectObservable<Mail> {
    return this._af.database.object(`${this.COLLECTION_NAME}/${id}`);
  }

  public searchMails(type: string): void {
    this._mailsQP.next(`${this._authenticationService.authenticatedProfile.$key}${type}`);
  }

  public getMails(): Observable<Mail[]> {
    return this._mailsQ;
  }

  public updateMail(mail: Mail): firebase.Promise<void> {
    return this.getMail(mail.$key).update(mail);
  }

  public addMail(mail: Mail): void {
    this._af.database.list(this.COLLECTION_NAME).push(mail);
  }

  public updateMenuLabels(): void {
    let inboxMenuItem: LeftMenuItem;
    let trashMenuItem: LeftMenuItem;
    for (const menuItem of this._menuService.fullMenu) {
      for (const subMenuItem of menuItem.subItems) {
        if (subMenuItem.type === 'INBOX') {
          inboxMenuItem = subMenuItem;
        }
        if (subMenuItem.type === 'TRASH') {
          trashMenuItem = subMenuItem;
        }
      }
    }

    this._unreadMailsQ.subscribe((mails: Mail[]) => {
      inboxMenuItem.countLabel = mails.filter((mail: Mail) => mail.type === 'INBOX').length;
      trashMenuItem.countLabel = mails.filter((mail: Mail) => mail.type === 'TRASH').length;
    });
  }

  private prepareReceivers(mail: Mail, myContact: Contact, typeAll: string): Contact[] {
    if (!(typeAll === 'true')) {
      return [mail.sender];
    }

    const receivers: Contact[] = mail.receivers.filter((contact: Contact) => !ContactsService.isEqual(contact, myContact));
    receivers.push(mail.sender);
    return receivers;
  }
}
