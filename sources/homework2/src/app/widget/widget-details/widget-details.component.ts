import {Component, Input} from '@angular/core';

@Component({
  selector: 'widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css']
})
export class WidgetDetailsComponent {
  @Input()
  public hotel: Hotel;
}
