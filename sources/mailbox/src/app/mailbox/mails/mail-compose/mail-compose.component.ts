import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormGroup} from '@angular/forms';

import {Observable} from 'rxjs/Observable';

import {MailsService} from '../../../common/service/mails.service';

import 'rxjs/add/observable/zip';

@Component({
  selector: 'mailbox-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.css']
})
export class MailComposeComponent implements OnInit {
  public type: string;
  public mailForm: FormGroup;

  public constructor(
    private _activatedRoute: ActivatedRoute,
    private _mailService: MailsService
  ) { }

  public ngOnInit(): void {
    Observable.zip(
      this._activatedRoute.data,
      this._activatedRoute.queryParams
    ).subscribe((result: [{mail: Mail, type: string}, {all: string}]) => {
      this.type = result[0].type;
      this.mailForm = this._mailService.initMailForm(this.type, result[0].mail, result[1].all);
    });
  }
}
