import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationGuardService} from '../../authentication-guard.service';
import {BaseAuthenticationComponent} from '../base-authentication.component';
import {AuthenticationFormService} from '../authentication-form.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent extends BaseAuthenticationComponent {
  public constructor(
    router: Router,
    ags: AuthenticationGuardService,
    afs: AuthenticationFormService
  ) {
    super('signup', router, ags, afs);
  }
}
