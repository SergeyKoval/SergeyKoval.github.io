import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class ProfileService {
  private _collectionName: string = '/profiles';

  public constructor(private _af: AngularFire) {}

// public getProfileByUsername(username: string): Profile {
  //   let profile: Profile = null;
  //   const subject: Subject<string> = new Subject();
  //
  //   this._af.database.list(this._collectionName, {
  //     query: {
  //       orderByChild: 'username',
  //       equalTo: subject
  //     }
  //   }).subscribe(queriedItems => {
  //       profile = queriedItems[0];
  //   });
  //
  //   subject.next(username);
  //   return profile;
  // }

  public loadProfile(id: string): FirebaseObjectObservable<Profile> {
    return this._af.database.object(`${this._collectionName}/${id}`);
  }

}
