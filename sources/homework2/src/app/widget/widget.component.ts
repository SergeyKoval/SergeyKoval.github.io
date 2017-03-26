import { Component } from '@angular/core';

import {hotels} from '../common/data/hotels';

@Component({
  selector: 'widget',
  templateUrl: 'widget.component.html',
  styleUrls: ['widget.component.css']
})
export class WidgetComponent {
  public hotels: Hotel[] = hotels;

  private _selectedHotel: Hotel = this.hotels[0];
  private _selectedRating: number = null;

  public setSelectedHotel(hotel: Hotel): void {
    this._selectedHotel = hotel;
  }

  public get selectedHotel(): Hotel {
    return this._selectedHotel;
  }

  public setSelectedRating(rating: number): void {
    this._selectedRating = rating;
    this.setSelectedHotel(!rating ? this.hotels[0] : this.hotels.filter((hotel: Hotel) => hotel.rating === this._selectedRating)[0]);
  }

  public get selectedRating(): number {
    return this._selectedRating;
  }

  public isSelectedRaiting(value: number): boolean {
    return value === this._selectedRating;
  }
}
