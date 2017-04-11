import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'mailbox-left-menu-item',
  templateUrl: './left-menu-item.component.html',
  styleUrls: ['./left-menu-item.component.css']
})
export class LeftMenuItemComponent {
  @Input()
  public leftMenuItem: LeftMenuItem;
  @Input()
  public selectedItem: boolean;
  @Input()
  public selectedSubItem: LeftMenuItem;

  public constructor(public router: Router) {}
}
