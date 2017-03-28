import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MailboxComponent } from './mailbox.component';

@NgModule({
  declarations: [
    MailboxComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [MailboxComponent]
})
export class MailboxModule { }
