import { Component, OnInit } from '@angular/core';

import {MenuService} from '../../../common/service/menu.service';

@Component({
  selector: 'mailbox-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  public activeMenuItem: LeftMenuItem;

  public constructor(private _menuService: MenuService) { }

  public ngOnInit(): void {
    this.activeMenuItem = this._menuService.activeMenuItem;
  }
}
