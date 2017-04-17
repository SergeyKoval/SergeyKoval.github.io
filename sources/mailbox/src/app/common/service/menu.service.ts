import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Subject} from 'rxjs/Subject';

import {LEFT_MENU_ITEMS} from '../data/leftMenuItems';
import {UtilsService} from './utils.service';
import {Action} from '../model/Action';

@Injectable()
export class MenuService implements Resolve<LeftMenuItem> {
  private _fullMenu: LeftMenuItem[] = LEFT_MENU_ITEMS;
  private _activeMenuItem: ReplaySubject<LeftMenuItem> = new ReplaySubject(1);
  private _deleteEmails: Subject<Action> = new Subject();

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LeftMenuItem {
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

  public get fullMenu(): LeftMenuItem[] {
    return this._fullMenu;
  }

  public get activeMenuItem(): ReplaySubject<LeftMenuItem> {
    return this._activeMenuItem;
  }

  public get deleteEmails(): Subject<Action> {
    return this._deleteEmails;
  }
}
