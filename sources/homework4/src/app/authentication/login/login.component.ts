import { Component } from '@angular/core';
import {BaseAuthenticationComponent} from '../base-authentication.component';
import {Router} from '@angular/router';
import {AuthenticationGuardService} from '../../authentication-guard.service';
import {AuthenticationFormService} from '../authentication-form.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseAuthenticationComponent {
  public constructor(
    router: Router,
    ags: AuthenticationGuardService,
    afs: AuthenticationFormService
  ) {
    super('login', router, ags, afs);
  }
}
