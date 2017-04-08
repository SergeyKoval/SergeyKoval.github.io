import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationGuardService} from '../../authentication-guard.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public submitted: boolean = false;

  public constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _ags: AuthenticationGuardService
  ) {}

  public ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  public singUp(): void {
    if (this.signupForm.valid) {
      this._ags.indexAvailable = true;
      this._router.navigate(['index']);
    } else {
      this.submitted = true;
    }
  }
}
