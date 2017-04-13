import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {LEFT_MENU_ITEMS} from '../data/leftMenuItems';
import {UtilsService} from './utils.service';

@Injectable()
export class MenuService implements Resolve<LeftMenuItem> {
  private _fullMenu: LeftMenuItem[] = LEFT_MENU_ITEMS;

  public constructor(private _utilsService: UtilsService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LeftMenuItem {
    for (const menuItem of this._fullMenu) {
      for (const subMenuItem of menuItem.subItems) {
        if (this._utilsService.sameUrl(state.url, subMenuItem)) {
          return subMenuItem;
        }
      }
    }
  }

  public get fullMenu(): LeftMenuItem[] {
    return this._fullMenu;
  }
}
