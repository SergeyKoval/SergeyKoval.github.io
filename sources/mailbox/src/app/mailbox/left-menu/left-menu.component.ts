import {Component, OnInit} from '@angular/core';

import {MenuService} from '../../common/service/menu.service';

@Component({
  selector: 'mailbox-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  public leftMenuItems: LeftMenuItem[];

  public constructor(private _menuService: MenuService) {}

  public ngOnInit(): void {
    this.leftMenuItems = this._menuService.fullMenu;
  }
}
