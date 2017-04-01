import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { GithubSearchComponent } from './github-search.component';
import { SearchComponent } from './search/search.component';
import { ItemsComponent } from './items/items.component';
import {GithubSearchService} from './common/services/github-search.service';
import { ItemComponent } from './items/item/item.component';

@NgModule({
  declarations: [
    GithubSearchComponent,
    SearchComponent,
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    GithubSearchService
  ],
  bootstrap: [GithubSearchComponent]
})
export class GithubSearchModule { }
