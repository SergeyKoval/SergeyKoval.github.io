import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot} from '@angular/router';

import {Md5} from 'ts-md5/dist/md5';
import {AngularFire} from 'angularfire2';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/first';

@Injectable()
export class AuthenticationService implements CanActivate, Resolve<Profile> {
  private _authenticatedProfile: Profile;
  private _collectionName: string = '/profiles';
  private _authenticationResult: Subject<string> = new Subject();
  private _authenticateQ: Observable<Profile[]>;
  private _authenticateQP: Subject<string> = new Subject();

  public constructor(
    private _formBuilder: FormBuilder,
    private _af: AngularFire,
    private _router: Router
  ) {
    this._authenticateQ = this._af.database.list(this._collectionName, {
      query: {
        orderByChild: 'email',
        equalTo: this._authenticateQP
      }
    }).first();
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this._authenticatedProfile) {
      this._router.navigate(['authenticate']);
      return false;
    }

    return true;
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Profile {
    return this._authenticatedProfile;
  }

  public initAuthenticationForm(): FormGroup {
    return this._formBuilder.group({
      email: ['ikoval@gmail.com', [Validators.required, Validators.email, Validators.minLength(3)]],
      password: ['12345', [Validators.required, Validators.minLength(3)]]
    });
  }

  public authenticate(credentials: Credentials): void {
    this._authenticateQ.subscribe((profiles: Profile[]) => {
      if (!profiles[0]) {
        this._authenticationResult.next('User doesn\'t exist');
      } else if (Md5.hashStr(credentials.password) !== profiles[0].password) {
        this._authenticationResult.next('Invalid password');
      } else {
        this._authenticatedProfile = profiles[0];
        this._authenticationResult.next(null);
      }
    });

    this._authenticateQP.next(credentials.email);
  }

  public get authenticationResult(): Subject<string> {
    return this._authenticationResult;
  }
}
