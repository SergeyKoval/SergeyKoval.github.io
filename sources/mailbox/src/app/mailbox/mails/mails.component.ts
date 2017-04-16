import {Component, OnInit} from '@angular/core';

import {MailsService} from '../../common/service/mails.service';

@Component({
  selector: 'mailbox-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent implements OnInit {
  public constructor(private _mailService: MailsService) {}

  public ngOnInit(): void {
    this._mailService.updateMenuLabels();
  }
}
