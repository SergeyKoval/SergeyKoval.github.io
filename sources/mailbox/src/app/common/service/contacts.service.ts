import {Injectable} from '@angular/core';

import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {Contact} from 'app/common/model/Contact';

@Injectable()
export class ContactsService {
  private readonly _COLLECTION_NAME: string = '/contacts';
  private readonly _CONTACT_Q$: Observable<Contact[]>;
  private readonly _CONTACT_QP$$: Subject<string> = new Subject();

  public constructor(
    private _af: AngularFire
  ) {
    this._CONTACT_Q$ = this._af.database.list(this._COLLECTION_NAME, {
      query: {
        orderByChild: 'email',
        equalTo: this._CONTACT_QP$$
      }
    }).first();
  }

  public searchContact(email: string): void {
    this._CONTACT_QP$$.next(email);
  }

  public get contactSearch(): Observable<Contact[]> {
    return this._CONTACT_Q$;
  }

  public getContact(id: string): FirebaseObjectObservable<Contact> {
    return this._af.database.object(`${this._COLLECTION_NAME}/${id}`);
  }
}
