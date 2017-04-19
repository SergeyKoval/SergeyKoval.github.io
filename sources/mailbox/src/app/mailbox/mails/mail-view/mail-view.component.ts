import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Subscription} from 'rxjs/Subscription';

import {MailsService} from '../../../common/service/mails.service';
import {UtilsService} from '../../../common/service/utils.service';
import {MenuService} from '../../../common/service/menu.service';
import {Mail} from '../../../common/model/Mail';

@Component({
  selector: 'mailbox-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.css']
})
export class MailViewComponent implements OnInit, OnDestroy {
  public mail: Mail;
  private _previousActiveMenuItem: MenuItem;
  private _routeSubscription: Subscription;
  private _activeMenuSubscription: Subscription;

  public constructor(
    private _activatedRoute: ActivatedRoute,
    private _mailService: MailsService,
    private _menuService: MenuService,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this._routeSubscription = this._activatedRoute.data.subscribe((data: {mail: Mail}) => {
      this.mail = data.mail;
    });

    this._activeMenuSubscription = this._menuService.activeMenuItem$$.subscribe((activeMenuItem: MenuItem) => {
      this._previousActiveMenuItem = activeMenuItem;
    });
  }

  public ngOnDestroy(): void {
    this._routeSubscription.unsubscribe();
    this._activeMenuSubscription.unsubscribe();
  }

  public favorite(): void {
    this.mail.favorite = !this.mail.favorite;
    this._mailService.updateMail(this.mail);
  }

  public moveToTrash(): void {
    this.mail.type = 'TRASH';
    this.mail.ownerType = `${this.mail.owner}${this.mail.type}`;
    this._mailService.updateMail(this.mail);
    this._router.navigate([UtilsService.joinUrl(this._previousActiveMenuItem.href)]);
  }
}
