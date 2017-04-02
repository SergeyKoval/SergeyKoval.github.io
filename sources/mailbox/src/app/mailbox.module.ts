import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MailboxComponent } from './mailbox.component';
import { ProfileComponent } from './profile/profile.component';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "../environments/firebase.config";
import {ProfileService} from "./common/service/profile.service";
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LeftMenuItemComponent } from './left-menu/left-menu-item/left-menu-item.component';
import { LeftMenuActionsComponent } from './left-menu/left-menu-actions/left-menu-actions.component';

@NgModule({
  declarations: [
    MailboxComponent,
    ProfileComponent,
    LeftMenuComponent,
    LeftMenuItemComponent,
    LeftMenuActionsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [MailboxComponent]
})
export class MailboxModule { }
