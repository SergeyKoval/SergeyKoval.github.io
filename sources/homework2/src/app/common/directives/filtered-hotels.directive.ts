import {Directive, EventEmitter, Input, Output} from '@angular/core';

@Directive({
  selector: '[filteredHotels]'
})
export class FilteredHotelsDirective {
  @Input()
  public set filteredHotels(hotel: Hotel[]) {
    this.initFilteredHotel.emit(hotel);
  }

  @Output()
  public initFilteredHotel: EventEmitter<Hotel[]> = new EventEmitter();
}
