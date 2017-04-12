import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import {LEFT_MENU_ITEMS} from '../data/leftMenuItems';
import {UtilsService} from './utils.service';

@Injectable()
export class MenuService {
  private _fullMenu: LeftMenuItem[] = LEFT_MENU_ITEMS;
  private _activeMenuItem: LeftMenuItem;

  public constructor(
    private _router: Router,
    private _utilsService: UtilsService
  ) {
    for (const menuItem of this._fullMenu) {
      for (const subMenuItem of menuItem.subItems) {
        if (this._router.isActive(this._utilsService.joinUrl(subMenuItem.href), true)) {
          this._activeMenuItem = subMenuItem;
          break;
        }
      }
    }
  }

  public get fullMenu(): LeftMenuItem[] {
    return this._fullMenu;
  }

  public set activeMenuItem(value: LeftMenuItem) {
    this._activeMenuItem = value;
  }

  public get activeMenuItem(): LeftMenuItem {
    return this._activeMenuItem;
  }
}
