import { Component } from '@angular/core';
import {LEFT_MENU_ITEMS} from '../../common/data/leftMenuItems';

@Component({
  selector: 'mailbox-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent {
  public leftMenuItems: LeftMenuItem[] = LEFT_MENU_ITEMS;
}
