import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {MenuService} from '../../../common/service/menu.service';

@Component({
  selector: 'mailbox-left-menu-item',
  templateUrl: './left-menu-item.component.html',
  styleUrls: ['./left-menu-item.component.css']
})
export class LeftMenuItemComponent {
  @Input()
  public leftMenuItem: LeftMenuItem;

  public constructor(
    public router: Router,
    private _menuService: MenuService
  ) {}

  public activateMenuItem(menuItem: LeftMenuItem): void {
    this._menuService.activeMenuItem = menuItem;
  }
}
