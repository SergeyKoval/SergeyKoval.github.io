import {Component, OnInit} from '@angular/core';

import {MenuService} from '../../common/service/menu.service';

@Component({
  selector: 'mailbox-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public leftMenuItems: LeftMenuItem[];

  public constructor(private _menuService: MenuService) {}

  public ngOnInit(): void {
    this.leftMenuItems = this._menuService.fullMenu;
  }
}
