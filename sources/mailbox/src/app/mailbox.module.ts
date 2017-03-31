import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MailboxComponent } from './mailbox.component';
import { ProfileComponent } from './profile/profile.component';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "../environments/firebase.config";
import {ProfileService} from "./common/service/profile.service";

@NgModule({
  declarations: [
    MailboxComponent,
    ProfileComponent
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
