import {Route} from '@angular/router';

import {AuthenticationComponent} from './authentication/authentication.component';
import {MailboxComponent} from './mailbox/mailbox.component';
import {AuthenticationService} from './common/service/authentication.service';
import {MailsComponent} from './mailbox/mails/mails.component';
import {ContactsComponent} from './mailbox/contacts/contacts.component';
import {MailListComponent} from './mailbox/mails/mail-list/mail-list.component';
import {MenuService} from './common/service/menu.service';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    component: AuthenticationComponent
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
            resolve: {
              activeMenuItem: MenuService
            }
          },
          {
            path: 'sent',
            component: MailListComponent,
            resolve: {
              activeMenuItem: MenuService
            }
          },
          {
            path: 'drafts',
            component: MailListComponent,
            resolve: {
              activeMenuItem: MenuService
            }
          },
          {
            path: 'trash',
            component: MailListComponent,
            resolve: {
              activeMenuItem: MenuService
            }
          },
          {
            path: '**',
            redirectTo: 'inbox'
          }
        ]
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        children: [
          {
            path: '',
            redirectTo: 'all',
            pathMatch: 'full'
          },
          {
            path: 'all',
            component: MailListComponent,
            resolve: {
              activeMenuItem: MenuService
            }
          },
          {
            path: ':group',
            component: MailListComponent,
            resolve: {
              activeMenuItem: MenuService
            }
          }
        ]
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
