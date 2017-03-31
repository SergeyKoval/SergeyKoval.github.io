import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {ProfileService} from "./common/service/profile.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: 'mailbox.component.html',
  styleUrls: ['mailbox.component.css']
})
export class MailboxComponent {
  public title: string = 'mailbox works!';
  public subject = new Subject();

  public items: FirebaseListObservable<Profile[]>;
  // public profile: Profile = this._profileService.getProfileByUsername('ikoval');
  public profile: FirebaseObjectObservable<Profile>;
  // public profile: FirebaseListObservable<Profile[]>;

  public constructor(af: AngularFire, private _profileService: ProfileService) {
    this.items = af.database.list('/profiles');


    // this.profile = af.database.list('/profiles', {
    //   query: {
    //     orderByChild: 'username',
    //     equalTo: 'ikoval'
    //   }
    // });

    this.profile = af.database.object('/profiles/-KgPjB1XqWX3o3HXktqN');

  }

  public search(): void {
    this.subject.next('ikoval');
  }
}
