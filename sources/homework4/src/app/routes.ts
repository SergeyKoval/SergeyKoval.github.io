import {Route} from '@angular/router';
import {LoginComponent} from './authentication/login/login.component';
import {SignupComponent} from './authentication/signup/signup.component';
import {IndexComponent} from './index/index.component';
import {AuthenticationGuardService} from './authentication-guard.service';
import {AuthenticationComponent} from './authentication/authentication.component';

export const routes: Route[] = [
  {
    path: 'homework4',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    component: AuthenticationComponent,
    children: [
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
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: '**',
    redirectTo: 'authentication'
  }
];
