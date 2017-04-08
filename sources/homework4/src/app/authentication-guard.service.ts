import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthenticationGuardService implements CanActivate {
  private _indexAvailable: boolean;

  public constructor(private _router: Router) {
  }

  public set indexAvailable(value: boolean) {
    this._indexAvailable = value;
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this._indexAvailable) {
      this._router.navigate(['']);
    }
    return this._indexAvailable;
  }
}
