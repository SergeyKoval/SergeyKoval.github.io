import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Subject} from 'rxjs/Subject';

import {MENU_ITEMS} from '../data/menuItems';
import {UtilsService} from './utils.service';
import {Action} from '../model/Action';

@Injectable()
export class MenuService implements Resolve<MenuItem> {
  private readonly _FULL_MENU: MenuItem[] = MENU_ITEMS;
  private readonly _ACTIVE_MENU_ITEM$$: ReplaySubject<MenuItem> = new ReplaySubject(1);
  private readonly _DELETE_EMAILS_ACTION$$: Subject<Action> = new Subject();

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MenuItem {
    this._DELETE_EMAILS_ACTION$$.next(Action.DISABLE);
    for (const menuItem of this._FULL_MENU) {
      for (const subMenuItem of menuItem.subItems) {
        if (UtilsService.sameUrl(state.url, subMenuItem)) {
          this._ACTIVE_MENU_ITEM$$.next(subMenuItem);
          return subMenuItem;
        }
      }
    }
  }

  public get fullMenu(): MenuItem[] {
    return this._FULL_MENU;
  }

  public get activeMenuItem$$(): ReplaySubject<MenuItem> {
    return this._ACTIVE_MENU_ITEM$$;
  }

  public get deleteEmailsAction$$(): Subject<Action> {
    return this._DELETE_EMAILS_ACTION$$;
  }
}
