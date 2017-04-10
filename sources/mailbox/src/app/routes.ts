import {Route} from '@angular/router';

import {AuthenticationComponent} from './authentication/authentication.component';
import {MailboxComponent} from './mailbox/mailbox.component';
import {AuthenticationService} from './common/service/authentication.service';

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
  {
    path: 'mailbox',
    component: MailboxComponent,
    canActivate: [AuthenticationService],
    resolve: {
      profile: AuthenticationService
    }
  },
  {
    path: '**',
    redirectTo: 'authentication'
  }
];
