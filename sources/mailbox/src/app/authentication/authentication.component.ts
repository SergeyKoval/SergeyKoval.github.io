import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

import {AuthenticationService} from '../common/service/authentication.service';

@Component({
  selector: 'mailbox-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  public authenticationForm: FormGroup;
  public submitted: boolean = false;
  public errorMessage: string;
  public loading: boolean = false;

  public constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    this.authenticationForm = this._authenticationService.initAuthenticationForm();
    const authenticationResult: Subject<string> = this._authenticationService.authenticationResult;
    const subscribe: Subscription = authenticationResult.subscribe((result: string) => {
      this.loading = false;

      if (result) {
        this.errorMessage = result;
      } else {
        this.errorMessage = null;
        subscribe.unsubscribe();
        authenticationResult.complete();
        console.log('Finished');
      }
    });
  }

  public authenticate(): void {
    this.submitted = true;

    if (this.authenticationForm.valid) {
      this.loading = true;
      this._authenticationService.authenticate(this.authenticationForm.value);
    }
  }
}
