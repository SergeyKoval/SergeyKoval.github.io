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

  public static isEqual(c1: Contact, c2: Contact): boolean {
    return c1.email === c2.email && c1.firstName === c2.firstName && c1.lastName === c2.lastName;
  }
}
