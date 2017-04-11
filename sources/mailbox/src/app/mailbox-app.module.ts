import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from 'angularfire2';

import { MailboxAppComponent } from './mailbox-app.component';
import { ProfileComponent } from './mailbox/profile/profile.component';
import {firebaseConfig} from '../environments/firebase.config';
import {ProfileService} from './common/service/profile.service';
import { LeftMenuComponent } from './mailbox/left-menu/left-menu.component';
import { LeftMenuItemComponent } from './mailbox/left-menu/left-menu-item/left-menu-item.component';
import { LeftMenuActionsComponent } from './mailbox/left-menu/left-menu-actions/left-menu-actions.component';
import {routes} from './routes';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import {AuthenticationService} from './common/service/authentication.service';
import {InputComponent} from './authentication/input/input.component';
import { MailsComponent } from './mailbox/mails/mails.component';
import { ContactsComponent } from './mailbox/contacts/contacts.component';
import { MailListComponent } from './mailbox/mails/mail-list/mail-list.component';


@NgModule({
  declarations: [
    MailboxAppComponent,
    ProfileComponent,
    LeftMenuComponent,
    LeftMenuItemComponent,
    LeftMenuActionsComponent,
    AuthenticationComponent,
    InputComponent,
    MailboxComponent,
    MailsComponent,
    ContactsComponent,
    MailListComponent
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
    ProfileService
  ],
  bootstrap: [MailboxAppComponent]
})
export class MailboxAppModule { }
