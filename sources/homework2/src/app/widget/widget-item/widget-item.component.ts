import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'widget-item',
  templateUrl: './widget-item.component.html',
  styleUrls: ['./widget-item.component.css']
})
export class WidgetItemComponent {
  @Input()
  public hotel: Hotel;
  @Output()
  public newSelectedHotel: EventEmitter<Hotel> = new EventEmitter();
}
