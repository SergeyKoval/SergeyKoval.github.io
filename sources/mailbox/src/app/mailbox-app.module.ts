import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from 'angularfire2';

import { MailboxAppComponent } from './mailbox-app.component';
import { ProfileComponent } from './mailbox/profile/profile.component';
import {firebaseConfig} from '../environments/firebase.config';
import { MenuComponent } from './mailbox/menu/menu.component';
import { MenuItemComponent } from './mailbox/menu/menu-item/menu-item.component';
import { MenuActionsComponent } from './mailbox/menu/menu-actions/menu-actions.component';
import {routes} from './routes';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import {AuthenticationService} from './common/service/authentication.service';
import {InputComponent} from './authentication/input/input.component';
import { MailsComponent } from './mailbox/mails/mails.component';
import { ContactsComponent } from './mailbox/contacts/contacts.component';
import { MailListComponent } from './mailbox/mails/mail-list/mail-list.component';
import { ActiveMenuPipe } from './common/pipes/active-menu.pipe';
import {UtilsService} from './common/service/utils.service';
import {MenuService} from './common/service/menu.service';
import {MailsService} from './common/service/mails.service';
import { MailListItemComponent } from './mailbox/mails/mail-list/mail-list-item/mail-list-item.component';
import {ContactsService} from './common/service/contacts.service';
import { ContactPipe } from './common/pipes/contact.pipe';
import { MailDatePipe } from './common/pipes/mail-date.pipe';
import { MailViewComponent } from './mailbox/mails/mail-view/mail-view.component';
import { MailComposeComponent } from './mailbox/mails/mail-compose/mail-compose.component';
import { MailPagingPipe } from './common/pipes/mail-paging.pipe';

@NgModule({
  declarations: [
    MailboxAppComponent,
    ProfileComponent,
    MenuComponent,
    MenuItemComponent,
    MenuActionsComponent,
    AuthenticationComponent,
    InputComponent,
    MailboxComponent,
    MailsComponent,
    ContactsComponent,
    MailListComponent,
    ActiveMenuPipe,
    MailListItemComponent,
    ContactPipe,
    MailDatePipe,
    MailViewComponent,
    MailComposeComponent,
    MailPagingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AuthenticationService,
    UtilsService,
    MenuService,
    MailsService,
    ContactsService
  ],
  bootstrap: [MailboxAppComponent]
})
export class MailboxAppModule { }
