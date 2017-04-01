import { Component } from '@angular/core';

@Component({
  selector: 'github-search',
  templateUrl: 'github-search.component.html',
  styleUrls: ['github-search.component.css']
})
export class GithubSearchComponent {
  public searchTerm: string;

  public initSearch(value: string): void {
    this.searchTerm = value;
  }
}
