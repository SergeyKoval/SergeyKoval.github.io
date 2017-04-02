import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {ProfileService} from './common/service/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: 'mailbox.component.html',
  styleUrls: ['mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  public profile: Profile;

  // public subject = new Subject();

  // public items: FirebaseListObservable<Profile[]>;
  // public profile: Profile = this._profileService.getProfileByUsername('ikoval');
  // public profile: FirebaseObjectObservable<Profile>;
  // public profile: FirebaseListObservable<Profile[]>;

  public constructor(private _profileService: ProfileService) {
    // this.items = af.database.list('/PROFILES');


    // this.profile = af.database.list('/PROFILES', {
    //   query: {
    //     orderByChild: 'username',
    //     equalTo: 'ikoval'
    //   }
    // });

    // this.profile = af.database.object('/PROFILES/-KgPjbXPxi1hZxVkwKWD');

  }


  public ngOnInit(): void {
    this._profileService.loadProfile('-KgPjbXPxi1hZxVkwKWD').subscribe((profile: Profile) => this.profile = profile);
  }

// public search(): void {
  //   this.subject.next('ikoval');
  // }
}
