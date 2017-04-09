import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {OnInit} from '@angular/core';

import {AuthenticationGuardService} from 'app/authentication-guard.service';
import {AuthenticationFormService} from './authentication-form.service';

export abstract class BaseAuthenticationComponent implements OnInit {
  public authenticationForm: FormGroup;
  public submitted: boolean = false;

  public constructor(
    private _authenticationType: string,
    private _router: Router,
    private _ags: AuthenticationGuardService,
    private _authenticationFormService: AuthenticationFormService
  ) {}

  public ngOnInit(): void {
    this.authenticationForm = this._authenticationFormService.initFormGroup(this._authenticationType);
  }

  public authenticate(): void {
    if (this.authenticationForm.valid) {
      this._ags.indexAvailable = true;
      this._router.navigate(['/index'], { queryParams: { type: this._authenticationType } });
    } else {
      this.submitted = true;
    }
  }
}
