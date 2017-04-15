import { Injectable } from '@angular/core';

import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class ContactsService {
  private readonly _collectionName: string = '/contacts';

  public constructor(
    private _af: AngularFire
  ) {}

  public getContact(id: string): FirebaseObjectObservable<Contact> {
    console.log(`${this._collectionName}/${id}`);
    return this._af.database.object(`${this._collectionName}/${id}`);
  }
}
