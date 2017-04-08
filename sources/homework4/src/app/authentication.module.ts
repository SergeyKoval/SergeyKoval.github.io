import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { RootComponent } from './root.component';
import { LoginComponent } from './authentication/login/login.component';
import {routes} from './routes';
import { SignupComponent } from './authentication/signup/signup.component';
import { InputComponent } from './authentication/input/input.component';
import { IndexComponent } from './index/index.component';
import {AuthenticationGuardService} from './authentication-guard.service';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    SignupComponent,
    InputComponent,
    IndexComponent,
    AuthenticationComponent
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
  bootstrap: [RootComponent]
})
export class AuthenticationModule { }
