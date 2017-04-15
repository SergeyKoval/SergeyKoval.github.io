import { Injectable } from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {AngularFire} from 'angularfire2';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import {AuthenticationService} from './authentication.service';

import 'rxjs/add/operator/map';

@Injectable()
export class MailsService {
  private readonly _collectionName: string = '/mails';

  private _mailsQ: Observable<Mail[]>;
  private _mailsQP: Subject<string> = new Subject();

  public constructor(
    private _authenticationService: AuthenticationService,
    private _formBuilder: FormBuilder,
    private _af: AngularFire
  ) {
    this._mailsQ = this._af.database.list(this._collectionName, {
      query: {
        orderByChild: 'ownerType',
        equalTo: this._mailsQP
      }
    }).map((mails: Mail[]) => {
      mails.sort((first: Mail, second: Mail) => second.time - first.time);
      return mails;
    });
  }

  public searchMails(type: string): void {
    this._mailsQP.next(`${this._authenticationService.authenticatedProfile.$key}${type}`);
  }

  public getMails(): Observable<Mail[]> {
    return this._mailsQ;
  }
}
