import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormGroup} from '@angular/forms';

import {Observable} from 'rxjs/Observable';

import {MailsService} from '../../../common/service/mails.service';
import {MenuService} from '../../../common/service/menu.service';
import {UtilsService} from 'app/common/service/utils.service';

import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/last';

@Component({
  selector: 'mailbox-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.css']
})
export class MailComposeComponent implements OnInit {
  public type: string;
  public mailForm: FormGroup;
  private _previousActiveMenuItem: LeftMenuItem;

  public constructor(
    private _activatedRoute: ActivatedRoute,
    private _mailService: MailsService,
    private _menuService: MenuService,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    Observable.zip(
      this._activatedRoute.data,
      this._activatedRoute.queryParams
    ).subscribe((result: [{mail: Mail, type: string}, {all: string}]) => {
      this.type = result[0].type;
      this.mailForm = this._mailService.initMailForm(this.type, result[0].mail, result[1].all);
    });

    this._menuService.activeMenuItem.subscribe((activeMenuItem: LeftMenuItem) => {
      this._previousActiveMenuItem = activeMenuItem;
    });
  }

  public sendMail(type: string): void {
    const formControls: {[key: string]: AbstractControl} = this.mailForm.controls;
    formControls.time.setValue(new Date().getTime());
    formControls.type.setValue(type);
    formControls.ownerType.setValue(`${formControls.owner.value}${type}`);
    this._mailService.addMail(this.mailForm.value);
    this._router.navigate([UtilsService.joinUrl(this._previousActiveMenuItem.href)]);
  }
}
