import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {Subscription} from 'rxjs/Subscription';

import {AuthenticationService} from '../common/service/authentication.service';
import {MailsService} from '../common/service/mails.service';

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
    // private _mailService: MailsService,
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    this.authenticationForm = this._authenticationService.initAuthenticationForm();
    const authenticationResult: Subscription = this._authenticationService.authenticationResult$$.subscribe((result: string) => {
      this.loading = false;

      if (result) {
        this.errorMessage = result;
        return;
      }

      this.errorMessage = null;
      authenticationResult.unsubscribe();
      this._router.navigate(['/mailbox']);
    });
  }

  public authenticate(): void {
    // this._mailService.generateMails();
    this.submitted = true;

    if (this.authenticationForm.valid) {
      this.loading = true;
      this._authenticationService.authenticate(this.authenticationForm.value);
    }
  }
}
