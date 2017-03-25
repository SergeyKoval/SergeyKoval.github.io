import { Pipe, PipeTransform } from '@angular/core';
import {Hotel} from '../../widget/Hotel';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  public transform(hotels: Hotel[], selectedRating: number): Hotel[] {
    if (!selectedRating) {
      return hotels;
    }

    return hotels.filter((hotel: Hotel) => hotel.raitng === selectedRating);
  }
}
