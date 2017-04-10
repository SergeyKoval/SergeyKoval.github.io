import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mailbox-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile: Profile;

  public constructor(private _activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: {profile: Profile}) => {
      this.profile = data.profile;
    });
  }
}
