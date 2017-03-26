import {Directive, EventEmitter, Input, Output} from '@angular/core';

@Directive({
  selector: '[filteredSelectedHotel]'
})
export class FilteredSelectedHotelDirective {
  @Input()
  public set filteredSelectedHotel(hotel: Hotel) {
    this.initFilteredHotel.emit(hotel);
  }

  @Output()
  public initFilteredHotel: EventEmitter<Hotel> = new EventEmitter();
}
