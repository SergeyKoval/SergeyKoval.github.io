import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GithubSearchComponent } from './github-search.component';

@NgModule({
  declarations: [
    GithubSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [GithubSearchComponent]
})
export class GithubSearchModule { }
