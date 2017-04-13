import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mailbox-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  public activeMenuItem: LeftMenuItem;

  public constructor(private _activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: {activeMenuItem: LeftMenuItem}) => {
      this.activeMenuItem = data.activeMenuItem;
    });
  }
}
