import {Component, Input} from '@angular/core';

@Component({
  selector: 'mailbox-mail-list-item',
  templateUrl: './mail-list-item.component.html',
  styleUrls: ['./mail-list-item.component.css']
})
export class MailListItemComponent {
  @Input()
  public mail: Mail;
  @Input()
  public odd: boolean;
}
