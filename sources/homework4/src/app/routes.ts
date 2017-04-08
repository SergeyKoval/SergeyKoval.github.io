import {Route} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {IndexComponent} from './index/index.component';
import {AuthenticationGuardService} from './authentication-guard.service';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
