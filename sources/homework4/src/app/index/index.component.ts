import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, ParamMap, Params} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public authenticationType: string;

  public constructor(private _route: ActivatedRoute) {}

  public ngOnInit(): void {
    this._route.queryParams.subscribe((data: Params) => {
      this.authenticationType = data['type'];
    });
  }
}
