import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import {AuthenticationService} from './authentication.service';
import {MenuService} from './menu.service';
import {Contact} from '../model/Contact';
import {Mail} from 'app/common/model/Mail';

import 'rxjs/add/operator/map';

@Injectable()
export class MailsService implements Resolve<Mail> {
  private readonly _COLLECTION_NAME: string = '/mails';
  private readonly _MAILS_Q$: Observable<Mail[]>;
  private readonly _UNREAD_MAILS_Q$: Observable<Mail[]>;
  private readonly _MAILS_QP$$: Subject<string> = new Subject();

  public constructor(
    private _authenticationService: AuthenticationService,
    private _menuService: MenuService,
    private _formBuilder: FormBuilder,
    private _af: AngularFire
  ) {
    this._MAILS_Q$ = this._af.database.list(this._COLLECTION_NAME, {
      query: {
        orderByChild: 'ownerType',
        equalTo: this._MAILS_QP$$
      }
    }).map((mails: Mail[]) => {
      mails.sort((first: Mail, second: Mail) => second.time - first.time);
      return mails;
    });

    this._UNREAD_MAILS_Q$ = this._af.database.list(this._COLLECTION_NAME, {
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
    const myContact: Contact = Contact.initFromProfile(profile);

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
      owner: [ profile.$key],
      type: [''],
      ownerType: [''],
      favorite: [false],
      read: [true],
      sender: [myContact],
      time: [''],
      body: [body, [Validators.required, Validators.minLength(3)]],
      topic: [topic, [Validators.required, Validators.minLength(3)]],
      receivers: [receivers],
      receiverEmail: ['', [Validators.email]]
    });
  }

  public getMail(id: string): FirebaseObjectObservable<Mail> {
    return this._af.database.object(`${this._COLLECTION_NAME}/${id}`);
  }

  public searchMails(type: string): void {
    this._MAILS_QP$$.next(`${this._authenticationService.authenticatedProfile.$key}${type}`);
  }

  public getMails(): Observable<Mail[]> {
    return this._MAILS_Q$;
  }

  public updateMail(mail: Mail): firebase.Promise<void> {
    return this.getMail(mail.$key).update(mail);
  }

  public addMail(mail: Mail): void {
    this._af.database.list(this._COLLECTION_NAME).push(mail);
  }

  public updateMenuLabels(): void {
    let inboxMenuItem: MenuItem;
    let trashMenuItem: MenuItem;
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

    const subscription: Subscription = this._UNREAD_MAILS_Q$.subscribe((mails: Mail[]) => {
      inboxMenuItem.countLabel = mails.filter((mail: Mail) => mail.type === 'INBOX').length;
      trashMenuItem.countLabel = mails.filter((mail: Mail) => mail.type === 'TRASH').length;
      subscription.unsubscribe();
    });
  }

  public generateMails(): void {
    const time: number = new Date().getTime();
    this.getMail('mail1').first().subscribe((mail: Mail) => {
      const topic: string = mail.topic;
      for (let _i: number = 1; _i < 40; _i++) {
        mail.topic = topic + _i;
        mail.time = time - _i * 1000 * 60 * 60;
        this.addMail(mail);
      }
    });
  }

  private prepareReceivers(mail: Mail, myContact: Contact, typeAll: string): Contact[] {
    if (!(typeAll === 'true')) {
      return [mail.sender];
    }

    const receivers: Contact[] = mail.receivers.filter((contact: Contact) => !myContact.isEqual(contact));
    receivers.push(mail.sender);
    return receivers;
  }
}
