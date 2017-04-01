import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubSearchService {
  public constructor(@Inject(Http) private _http: Http) {}

  public findRepositories(searchValue: string): Observable<Repository[]> {
    return this._http.get(`https://api.github.com/search/repositories?q=${searchValue}`).map((res: Response) => res.json().items);
  }
}
