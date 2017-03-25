import {Component, Input} from '@angular/core';

@Component({
  selector: 'widget-weather',
  templateUrl: 'widget-weather.component.html',
  styleUrls: ['widget-weather.component.css']
})
export class WidgetWeatherComponent {
  @Input()
  public city: City;
}
