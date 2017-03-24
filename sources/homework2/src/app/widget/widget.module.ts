import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WidgetComponent } from './widget.component';
import { WidgetWeatherComponent } from './widget-weather/widget-weather.component';
import { WidgetDetailsComponent } from './widget-details/widget-details.component';

@NgModule({
  declarations: [
    WidgetComponent,
    WidgetWeatherComponent,
    WidgetDetailsComponent
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
