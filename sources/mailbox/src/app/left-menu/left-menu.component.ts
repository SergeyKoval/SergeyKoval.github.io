import { Component, OnInit } from '@angular/core';
import {LEFT_MENU_ITEMS} from '../common/data/leftMenuItems';

@Component({
  selector: 'mailbox-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  public leftMenuItems: LeftMenuItem[] = LEFT_MENU_ITEMS;
  public selectedLeftMenuItem: LeftMenuItem = null;
  public selectedLeftMenuSubItem: LeftMenuItem = null;

  public ngOnInit(): void {
    if (!this.selectedLeftMenuItem) {
      this.selectedLeftMenuItem = this.leftMenuItems[0];
    }
    if (!this.selectedLeftMenuSubItem) {
      this.selectedLeftMenuSubItem = this.selectedLeftMenuItem.subItems[0];
    }
  }
}
