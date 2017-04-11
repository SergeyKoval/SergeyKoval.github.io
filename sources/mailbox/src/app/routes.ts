import {Route} from '@angular/router';

import {AuthenticationComponent} from './authentication/authentication.component';
import {MailboxComponent} from './mailbox/mailbox.component';
import {AuthenticationService} from './common/service/authentication.service';
import {MailsComponent} from './mailbox/mails/mails.component';
import {ContactsComponent} from './mailbox/contacts/contacts.component';
import {MailListComponent} from "./mailbox/mails/mail-list/mail-list.component";

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
    },
    children: [
      {
        path: '',
        redirectTo: 'mails',
        pathMatch: 'full'
      },
      {
        path: 'mails',
        component: MailsComponent,
        children: [
          {
            path: '',
            redirectTo: 'inbox',
            pathMatch: 'full'
          },
          {
            path: 'inbox',
            component: MailListComponent,
          },
          {
            path: 'sent',
            component: MailListComponent,
          },
          {
            path: 'drafts',
            component: MailListComponent,
          },
          {
            path: 'trash',
            component: MailListComponent,
          },
          {
            path: '**',
            redirectTo: 'inbox'
          }
        ]
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: '**',
        redirectTo: 'mails'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'authentication'
  }
];
