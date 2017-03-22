import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WidgetComponent } from './widget.component';

@NgModule({
  declarations: [
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [WidgetComponent]
})
export class WidgetModule { }
