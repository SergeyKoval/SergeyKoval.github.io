import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Subscription} from 'rxjs/Subscription';

import {MailsService} from '../../../common/service/mails.service';
import {MailPagingPipe} from 'app/common/pipes/mail-paging.pipe';
import {UtilsService} from '../../../common/service/utils.service';
import {Action} from '../../../common/model/Action';
import {MenuService} from '../../../common/service/menu.service';
import {MAIL_FILTER_ITEMS} from '../../../common/data/mailFilterItems';
import {Mail} from '../../../common/model/Mail';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/debounce';

@Component({
  selector: 'mailbox-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit, OnDestroy {
  public readonly MAIL_FILTER_ITEMS: string[] = MAIL_FILTER_ITEMS;
  public activeMenuItem: MenuItem;
  public mails: Mail[];
  public loading: boolean = true;
  public filterField: string = 'All';
  public page: number = 1;

  private _originalMails: Mail[];
  private _selectedMails: Mail[] = [];
  private _deleteEmailsActionSubscription: Subscription;

  public constructor(
    private _activatedRoute: ActivatedRoute,
    private _mailService: MailsService,
    private _menuService: MenuService
  ) { }

  public ngOnInit(): void {
    const mailsSubscription: Subscription = this._activatedRoute.data
      .do((data: {activeMenuItem: MenuItem}) => {
        this.activeMenuItem = data.activeMenuItem;
      })
      .switchMapTo(this._mailService.getMails())
      .subscribe((mails: Mail[]) => {
        this.loading = false;
        this._originalMails = mails;
        this.mails = mails;
        mailsSubscription.unsubscribe();
      });

    this._mailService.searchMails(this.activeMenuItem.type);

    this._deleteEmailsActionSubscription = this._menuService.deleteEmailsAction$$.subscribe((action: Action) => {
      if (Action.SUBMIT === action) {
        this.moveSelectedMailsToTrash();
        this._menuService.deleteEmailsAction$$.next(Action.DISABLE);
      }
    });
  }

  public ngOnDestroy(): void {
    this._deleteEmailsActionSubscription.unsubscribe();
  }

  public initLoading(value: boolean): void {
    this.loading = value;
  }

  public manipulateSelectedMail(mail: Mail): void {
    const index: number = this._selectedMails.indexOf(mail);
    if (index !== -1) {
      this._selectedMails.splice(index, 1);
      if (this._selectedMails.length === 0) {
        this._menuService.deleteEmailsAction$$.next(Action.DISABLE);
      }
    } else {
      this._selectedMails.push(mail);
      this._menuService.deleteEmailsAction$$.next(Action.ENABLE);
    }
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
    return UtilsService.getPageLastItem(this.mails, this.page, MailPagingPipe.MAILS_PER_PAGE);
  }

  private moveSelectedMailsToTrash(): void {
    this.loading = true;
    for (const mail of this._selectedMails) {
      mail.type = 'TRASH';
      mail.ownerType = `${mail.owner}${mail.type}`;
      this._mailService.updateMail(mail);
    }
    this._selectedMails = [];
    this.page = 1;
    this.loading = false;
  }
}
