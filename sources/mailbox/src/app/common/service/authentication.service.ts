import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot} from '@angular/router';

import {LocalStorageService} from 'angular-2-local-storage';
import {Md5} from 'ts-md5/dist/md5';
import {AngularFire} from 'angularfire2';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';

import 'rxjs/add/operator/first';

@Injectable()
export class AuthenticationService implements CanActivate, Resolve<Profile> {
  private readonly COLLECTION_NAME: string = '/profiles';

  private _authenticated: ReplaySubject<boolean> = new ReplaySubject(1);
  private _authenticatedProfile: Profile;
  private _authenticationResult: Subject<string> = new Subject();
  private _authenticateQ: Observable<Profile[]>;
  private _authenticateQP: Subject<string> = new Subject();

  public constructor(
    private _localStorageService: LocalStorageService,
    private _formBuilder: FormBuilder,
    private _af: AngularFire,
    private _router: Router
  ) {
    this._authenticateQ = this._af.database.list(this.COLLECTION_NAME, {
      query: {
        orderByChild: 'email',
        equalTo: this._authenticateQP
      }
    }).first();
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.checkAuthentication();
    return this._authenticated.asObservable();
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
        this._localStorageService.set('AUTHENTICATION_PROFILE', this._authenticatedProfile.$key);
        this._authenticationResult.next(null);
      }
    });

    this._authenticateQP.next(credentials.email);
  }

  public get authenticationResult(): Subject<string> {
    return this._authenticationResult;
  }

  public get authenticatedProfile(): Profile {
    return this._authenticatedProfile;
  }

  private checkAuthentication(): void {
    if (this.authenticatedProfile) {
      this._authenticated.next(true);
      return;
    }

    const authenticationProfile: string = this._localStorageService.get('AUTHENTICATION_PROFILE') as string;
    if (!authenticationProfile) {
      this.failAuthentication();
      return;
    }

    this._af.database.object(`${this.COLLECTION_NAME}/${authenticationProfile}`).first().subscribe((profile: Profile) => {
      if (!profile) {
        this.failAuthentication();
        return;
      }

      this._authenticatedProfile = profile;
      this._authenticated.next(true);
    });
  }

  private failAuthentication(): void {
    this._router.navigate(['authenticate']);
    this._authenticated.next(false);
  }
}
