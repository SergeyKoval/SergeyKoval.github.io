import {Component, Input} from '@angular/core';

@Component({
  selector: 'mailbox-left-menu-actions',
  templateUrl: './left-menu-actions.component.html',
  styleUrls: ['./left-menu-actions.component.css']
})
export class LeftMenuActionsComponent {
  @Input()
  public selectedLeftMenuItem: LeftMenuItem;
}
