import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class AuthenticationFormService {
  public constructor(private _formBuilder: FormBuilder) {}

  public initFormGroup(authenticationType: string): FormGroup {
    switch (authenticationType) {
      case 'signup':
        return this._formBuilder.group({
          firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
          lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
          email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
          password: ['', [Validators.required, Validators.minLength(3)]]
        });
      case 'login':
        return this._formBuilder.group({
          email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
          password: ['', [Validators.required, Validators.minLength(3)]]
        });
    }
  }
}
