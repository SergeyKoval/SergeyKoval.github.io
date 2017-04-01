import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output()
  public searchTerm$: EventEmitter<string> = new EventEmitter();

  public search (value: string): void {
    if (value.length >= 2) {
      this.searchTerm$.emit(value);
    }
  }
}
