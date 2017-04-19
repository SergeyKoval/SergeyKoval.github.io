import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'mailbox-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  public profile: Profile;

  private _subscription: Subscription;

  public constructor(private _activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this._subscription = this._activatedRoute.data.subscribe((data: {profile: Profile}) => {
      this.profile = data.profile;
    });
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
