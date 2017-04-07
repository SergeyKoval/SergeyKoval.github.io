import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AuthenticationComponent]
})
export class AuthenticationModule { }
