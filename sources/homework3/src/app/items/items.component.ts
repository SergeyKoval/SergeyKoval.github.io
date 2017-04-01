import {Component, Input, OnInit} from '@angular/core';
import {GithubSearchService} from '../common/services/github-search.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public repositories: Repository[];
  public showLoadingIndicator: boolean = false;

  private _searchSubject: Subject<string> = new Subject();

  public constructor(private _githubSearchService: GithubSearchService) {}

  @Input()
  public set searchTerm(searchValue: string) {
    this._searchSubject.next(searchValue);
  }

  public ngOnInit(): void {
    this._searchSubject.subscribe((searchValue: string) => {
      this.showLoadingIndicator = true;
      this._githubSearchService.findRepositories(searchValue)
        .subscribe((repositories: Repository[]) => {
          this.repositories = repositories;
          this.showLoadingIndicator = false;
        });
    });
  }
}
