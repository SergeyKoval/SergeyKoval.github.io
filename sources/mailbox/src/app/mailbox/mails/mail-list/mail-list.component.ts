import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MailsService} from '../../../common/service/mails.service';

@Component({
  selector: 'mailbox-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  public activeMenuItem: LeftMenuItem;
  public mails: Mail[];
  public loading: boolean = true;

  public constructor(
    private _activatedRoute: ActivatedRoute,
    private _mailService: MailsService
  ) { }

  public ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: {activeMenuItem: LeftMenuItem}) => {
      this.activeMenuItem = data.activeMenuItem;

      this._mailService.getMails().subscribe((mails: Mail[]) => {
        this.loading = false;
        this.mails = mails;
      });

      this._mailService.searchMails(this.activeMenuItem.type);
    });
  }
}
