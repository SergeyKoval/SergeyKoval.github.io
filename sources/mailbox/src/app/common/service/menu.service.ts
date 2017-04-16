import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {ReplaySubject} from 'rxjs/ReplaySubject';

import {LEFT_MENU_ITEMS} from '../data/leftMenuItems';
import {UtilsService} from './utils.service';

@Injectable()
export class MenuService implements Resolve<LeftMenuItem> {
  private _fullMenu: LeftMenuItem[] = LEFT_MENU_ITEMS;
  private _activeMenuItem: ReplaySubject<LeftMenuItem> = new ReplaySubject(1);

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LeftMenuItem {
    for (const menuItem of this._fullMenu) {
      for (const subMenuItem of menuItem.subItems) {
        if (UtilsService.sameUrl(state.url, subMenuItem)) {
          this._activeMenuItem.next(subMenuItem);
          return subMenuItem;
        }
      }
    }
  }

  public get fullMenu(): LeftMenuItem[] {
    return this._fullMenu;
  }

  public get activeMenuItem(): ReplaySubject<LeftMenuItem> {
    return this._activeMenuItem;
  }
}
