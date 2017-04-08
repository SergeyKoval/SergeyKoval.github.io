import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import {routes} from './routes';
import { SignupComponent } from './signup/signup.component';
import { InputComponent } from './input/input.component';
import { IndexComponent } from './index/index.component';
import {AuthenticationGuardService} from './authentication-guard.service';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    InputComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthenticationGuardService
  ],
  bootstrap: [AuthenticationComponent]
})
export class AuthenticationModule { }
