import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WidgetComponent } from './widget.component';
import { WidgetWeatherComponent } from './widget-weather/widget-weather.component';
import { WidgetDetailsComponent } from './widget-details/widget-details.component';
import { WidgetItemComponent } from './widget-item/widget-item.component';
import { HotelFilterPipe } from '../common/pipes/hotel-filter.pipe';

@NgModule({
  declarations: [
    WidgetComponent,
    WidgetWeatherComponent,
    WidgetDetailsComponent,
    WidgetItemComponent,
    HotelFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [WidgetComponent]
})
export class WidgetModule { }
