import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'mailbox-left-menu-actions',
  templateUrl: './left-menu-actions.component.html',
  styleUrls: ['./left-menu-actions.component.css']
})
export class LeftMenuActionsComponent {
  public constructor(public router: Router) {}
}
