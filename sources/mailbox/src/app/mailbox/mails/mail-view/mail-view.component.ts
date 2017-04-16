import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MailsService} from '../../../common/service/mails.service';

@Component({
  selector: 'mailbox-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.css']
})
export class MailViewComponent implements OnInit {
  public mail: Mail;

  public constructor(
    private _activatedRoute: ActivatedRoute,
    private _mailService: MailsService
  ) { }

  public ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: {mail: Mail}) => {
      this.mail = data.mail;
    });
  }

  public favorite(): void {
    this.mail.favorite = !this.mail.favorite;
    this._mailService.updateMail(this.mail);
  }
}
