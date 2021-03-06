import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Action} from 'app/common/model/Action';
import {MenuService} from '../../../common/service/menu.service';

@Component({
  selector: 'mailbox-menu-actions',
  templateUrl: './menu-actions.component.html',
  styleUrls: ['./menu-actions.component.css']
})
export class MenuActionsComponent implements OnInit {
  public deleteEmailsEnabled: boolean = false;

  public constructor(
    public router: Router,
    private _menuService: MenuService
  ) {}

  public ngOnInit(): void {
    this._menuService.deleteEmailsAction$$.subscribe((action: Action) => {
      switch (action) {
        case Action.ENABLE:
          this.deleteEmailsEnabled = true;
          break;
        case Action.DISABLE:
          this.deleteEmailsEnabled = false;
          break;
      }
    });
  }

  public deleteEmails(): void {
    if (this.deleteEmailsEnabled) {
      this._menuService.deleteEmailsAction$$.next(Action.SUBMIT);
    }
  }
}
