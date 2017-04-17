import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';

import {MailsService} from '../../../../common/service/mails.service';

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
  @Output()
  public loading: EventEmitter<boolean> = new EventEmitter();
  @Output()
  public checkedMail: EventEmitter<Mail> = new EventEmitter();
  public checked: boolean = false;

  public constructor(
    private _mailService: MailsService,
    private _router: Router
  ) {}

  public favorite(): void {
    this.loading.emit(true);
    this.mail.favorite = !this.mail.favorite;
    this._mailService.updateMail(this.mail).then(() => this.loading.emit(false));
  }

  public openMail(): void {
    if (!this.mail.read) {
      this.mail.read = true;
      this._mailService.updateMail(this.mail);
      this._mailService.updateMenuLabels();
    }

    this._router.navigate(['mailbox/mails/view'], {queryParams: {id: this.mail.$key}});
  }

  public chooseMail(): void {
    this.checked = !this.checked;
    this.checkedMail.emit(this.mail);
  }
}
