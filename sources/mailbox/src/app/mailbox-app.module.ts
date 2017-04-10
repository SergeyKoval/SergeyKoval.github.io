import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from 'angularfire2';

import { MailboxAppComponent } from './mailbox-app.component';
import { ProfileComponent } from './profile/profile.component';
import {firebaseConfig} from '../environments/firebase.config';
import {ProfileService} from './common/service/profile.service';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LeftMenuItemComponent } from './left-menu/left-menu-item/left-menu-item.component';
import { LeftMenuActionsComponent } from './left-menu/left-menu-actions/left-menu-actions.component';
import {routes} from './routes';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import {AuthenticationService} from './common/service/authentication.service';
import {InputComponent} from './authentication/input/input.component';


@NgModule({
  declarations: [
    MailboxAppComponent,
    ProfileComponent,
    LeftMenuComponent,
    LeftMenuItemComponent,
    LeftMenuActionsComponent,
    AuthenticationComponent,
    InputComponent,
    MailboxComponent
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
