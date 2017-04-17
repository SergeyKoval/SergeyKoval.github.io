import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MailsService} from '../../../common/service/mails.service';
import {MailPagingPipe} from 'app/common/pipes/mail-paging.pipe';
import {UtilsService} from '../../../common/service/utils.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/debounce';

@Component({
  selector: 'mailbox-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  public activeMenuItem: LeftMenuItem;
  public mails: Mail[];
  public loading: boolean = true;
  public filterField: string = 'All';
  public page: number = 1;
  private _originalMails: Mail[];

  public constructor(
    private _activatedRoute: ActivatedRoute,
    private _mailService: MailsService
  ) { }

  public ngOnInit(): void {
    this._activatedRoute.data
      .do((data: {activeMenuItem: LeftMenuItem}) => {
        this.activeMenuItem = data.activeMenuItem;
      })
      .switchMapTo(this._mailService.getMails())
      .subscribe((mails: Mail[]) => {
        this.loading = false;
        this._originalMails = mails;
        this.mails = mails;
      });

    this._mailService.searchMails(this.activeMenuItem.type);
  }

  public initLoading(value: boolean): void {
    this.loading = value;
  }

  public filterMails(filterField: string): void {
    switch (filterField) {
      case 'Read':
        this.mails = this._originalMails.filter((mail: Mail) => mail.read);
        break;
      case 'Unread':
        this.mails = this._originalMails.filter((mail: Mail) => !mail.read);
        break;
      case 'Starred':
        this.mails = this._originalMails.filter((mail: Mail) => mail.favorite);
        break;
      case 'All':
        this.mails = this._originalMails;
        break;
    }

    this.page = 1;
    this.filterField = filterField;
  }

  public changePage(direction: number): void {
    const newPage: number = this.page + direction;
    const pagesAvailable: number = this.mails.length / MailPagingPipe.MAILS_PER_PAGE;
    if (newPage > 0 && (newPage <= pagesAvailable || (this.page < pagesAvailable && pagesAvailable < newPage))) {
      this.page = newPage;
    }
  }

  public getFirstItemPage(): number {
    return UtilsService.getPageFirstItem(this.mails, this.page, MailPagingPipe.MAILS_PER_PAGE) + 1;
  }

  public getLastItemPage(): number {
    const mailsLength: number = this.mails ? this.mails.length : 0;
    const lastItemPage: number = this.page * MailPagingPipe.MAILS_PER_PAGE;
    return lastItemPage <= mailsLength ? lastItemPage : mailsLength;
  }
}
