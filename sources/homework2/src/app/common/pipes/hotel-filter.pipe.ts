import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  public transform(hotels: Hotel[], selectedRating: number): Hotel[] {
    return !selectedRating ? hotels : hotels.filter((hotel: Hotel) => hotel.rating === selectedRating);
  }
}
