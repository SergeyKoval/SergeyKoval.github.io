import {Route} from '@angular/router';

import {AuthenticationComponent} from './authentication/authentication.component';
import {MailboxComponent} from './mailbox/mailbox.component';
import {AuthenticationService} from './common/service/authentication.service';
import {MailsComponent} from './mailbox/mails/mails.component';
import {ContactsComponent} from './mailbox/contacts/contacts.component';
import {MailListComponent} from './mailbox/mails/mail-list/mail-list.component';
import {MenuService} from './common/service/menu.service';
import {MailViewComponent} from './mailbox/mails/mail-view/mail-view.component';
import {MailsService} from './common/service/mails.service';
import {MailComposeComponent} from './mailbox/mails/mail-compose/mail-compose.component';
import {ContactsGroupComponent} from './mailbox/contacts/contacts-group/contacts-group.component';

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
            path: 'view',
            component: MailViewComponent,
            resolve: {
              mail: MailsService
            }
          },
          {
            path: 'compose',
            component: MailComposeComponent,
            data: {
              type: 'Compose'
            }
          },
          {
            path: 'forward',
            component: MailComposeComponent,
            resolve: {
              mail: MailsService
            },
            data: {
              type: 'Forward'
            }
          },
          {
            path: 'reply',
            component: MailComposeComponent,
            resolve: {
              mail: MailsService
            },
            data: {
              type: 'Reply'
            }
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
            component: ContactsGroupComponent,
            resolve: {
              activeMenuItem: MenuService
            }
          },
          {
            path: ':group',
            component: ContactsGroupComponent,
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
