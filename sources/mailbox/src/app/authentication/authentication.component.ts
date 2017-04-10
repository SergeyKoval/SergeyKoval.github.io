import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthenticationService} from '../common/service/authentication.service';

@Component({
  selector: 'mailbox-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  public authenticationForm: FormGroup;
  public submitted: boolean = false;

  public constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    this.authenticationForm = this._authenticationService.initAuthenticationForm();
  }

  public authenticate(): void {
    if (this.authenticationForm.valid) {

      // this._ags.indexAvailable = true;
      // this._router.navigate(['/index'], { queryParams: { type: this._authenticationType } });
    } else {
      this.submitted = true;
    }
  }
}
