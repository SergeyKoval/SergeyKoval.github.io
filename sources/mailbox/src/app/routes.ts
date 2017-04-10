import {Route} from '@angular/router';

import {AuthenticationComponent} from './authentication/authentication.component';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    component: AuthenticationComponent,
  },
  // {
  //   path: 'mailbox',
  //   component: IndexComponent,
  //   canActivate: [AuthenticationGuardService]
  // },
  {
    path: '**',
    redirectTo: 'authentication'
  }
];
