import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Md5} from 'ts-md5/dist/md5';
import {AngularFire} from 'angularfire2';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/first';


@Injectable()
export class AuthenticationService {
  public authenticatedProfile: Profile;

  private _collectionName: string = '/profiles';
  private _authenticationResult: Subject<string> = new Subject();
  private _authenticateQ: Observable<Profile[]>;
  private _authenticateQP: Subject<string> = new Subject();

  public constructor(
    private _formBuilder: FormBuilder,
    private _af: AngularFire
  ) {
    this._authenticateQ = this._af.database.list(this._collectionName, {
      query: {
        orderByChild: 'email',
        equalTo: this._authenticateQP
      }
    }).first();
  }

  public initAuthenticationForm(): FormGroup {
    return this._formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  public authenticate(credentials: Credentials): void {
    this._authenticateQ.subscribe((profiles: Profile[]) => {
      if (!profiles[0]) {
        this._authenticationResult.next('User doesn\'t exist');
      } else if (Md5.hashStr(credentials.password) !== profiles[0].password) {
        this._authenticationResult.next('Invalid password');
      } else {
        this.authenticatedProfile = profiles[0];
        this._authenticationResult.next(null);
      }
    });

    this._authenticateQP.next(credentials.email);
  }

  public get authenticationResult(): Subject<string> {
    return this._authenticationResult;
  }
}
