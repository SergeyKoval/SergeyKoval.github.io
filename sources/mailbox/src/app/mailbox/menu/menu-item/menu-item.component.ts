import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'mailbox-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input()
  public menuItem: MenuItem;

  public constructor(public router: Router) {}
}
