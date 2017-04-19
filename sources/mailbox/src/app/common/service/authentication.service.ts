import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot} from '@angular/router';

import {LocalStorageService} from 'angular-2-local-storage';
import {Md5} from 'ts-md5/dist/md5';
import {AngularFire} from 'angularfire2';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Subscription} from 'rxjs/Subscription';

import 'rxjs/add/operator/first';

@Injectable()
export class AuthenticationService implements CanActivate, Resolve<Profile> {
  private readonly _COLLECTION_NAME: string = '/profiles';
  private readonly _AUTHENTICATED$$: ReplaySubject<boolean> = new ReplaySubject(1);
  private readonly _AUTHENTICATION_RESULT$$: Subject<string> = new Subject();
  private readonly _AUTHENTICATE_QP$$: Subject<string> = new Subject();
  private readonly _AUTHENTICATE_Q$: Observable<Profile[]>;

  private _authenticatedProfile: Profile;

  public constructor(
    private _localStorageService: LocalStorageService,
    private _formBuilder: FormBuilder,
    private _af: AngularFire,
    private _router: Router
  ) {
    this._AUTHENTICATE_Q$ = this._af.database.list(this._COLLECTION_NAME, {
      query: {
        orderByChild: 'email',
        equalTo: this._AUTHENTICATE_QP$$
      }
    }).first();
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.checkAuthentication();
    return this._AUTHENTICATED$$.asObservable();
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Profile {
    return this._authenticatedProfile;
  }

  public initAuthenticationForm(): FormGroup {
    return this._formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  public authenticate(credentials: Credentials): void {
    const subscription: Subscription = this._AUTHENTICATE_Q$.subscribe((profiles: Profile[]) => {
      if (!profiles[0]) {
        this._AUTHENTICATION_RESULT$$.next('User doesn\'t exist');
      } else if (Md5.hashStr(credentials.password) !== profiles[0].password) {
        this._AUTHENTICATION_RESULT$$.next('Invalid password');
      } else {
        this._authenticatedProfile = profiles[0];
        this._localStorageService.set('AUTHENTICATION_PROFILE', this._authenticatedProfile.$key);
        this._AUTHENTICATION_RESULT$$.next(null);
      }
      subscription.unsubscribe();
    });

    this._AUTHENTICATE_QP$$.next(credentials.email);
  }

  public get authenticationResult$$(): Subject<string> {
    return this._AUTHENTICATION_RESULT$$;
  }

  public get authenticatedProfile(): Profile {
    return this._authenticatedProfile;
  }

  private checkAuthentication(): void {
    if (this.authenticatedProfile) {
      this._AUTHENTICATED$$.next(true);
      return;
    }

    const authenticationProfile: string = this._localStorageService.get('AUTHENTICATION_PROFILE') as string;
    if (!authenticationProfile) {
      this.failAuthentication();
      return;
    }

    const subscription: Subscription = this._af.database.object(`${this._COLLECTION_NAME}/${authenticationProfile}`).first()
      .subscribe((profile: Profile) => {
        if (!profile) {
          this.failAuthentication();
          return;
        }

        this._authenticatedProfile = profile;
        this._AUTHENTICATED$$.next(true);
        subscription.unsubscribe();
      });
  }

  private failAuthentication(): void {
    this._router.navigate(['authenticate']);
    this._AUTHENTICATED$$.next(false);
  }
}
