import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Subject} from 'rxjs/Subject';

import {MENU_ITEMS} from '../data/menuItems';
import {UtilsService} from './utils.service';
import {Action} from '../model/Action';

@Injectable()
export class MenuService implements Resolve<MenuItem> {
  private _fullMenu: MenuItem[] = MENU_ITEMS;
  private _activeMenuItem: ReplaySubject<MenuItem> = new ReplaySubject(1);
  private _deleteEmails: Subject<Action> = new Subject();

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MenuItem {
    this._deleteEmails.next(Action.DISABLE);
    for (const menuItem of this._fullMenu) {
      for (const subMenuItem of menuItem.subItems) {
        if (UtilsService.sameUrl(state.url, subMenuItem)) {
          this._activeMenuItem.next(subMenuItem);
          return subMenuItem;
        }
      }
    }
  }

  public get fullMenu(): MenuItem[] {
    return this._fullMenu;
  }

  public get activeMenuItem(): ReplaySubject<MenuItem> {
    return this._activeMenuItem;
  }

  public get deleteEmails(): Subject<Action> {
    return this._deleteEmails;
  }
}
