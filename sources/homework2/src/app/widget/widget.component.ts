import { Component } from '@angular/core';

import {hotels} from '../common/data/hotels';

@Component({
  selector: 'widget',
  templateUrl: 'widget.component.html',
  styleUrls: ['widget.component.css']
})
export class WidgetComponent {
  public hotels: Hotel[] = hotels;

  private _selectedHotel: Hotel = null;
  private _selectedRating: number = null;

  public setSelectedHotel(hotel: Hotel): void {
    this._selectedHotel = hotel;
  }

  public chooseSelectedHotel(hotels: Hotel[]): void {
    if (!this._selectedHotel || !hotels.some((hotel: Hotel) => hotel === this._selectedHotel)) {
      this._selectedHotel = hotels[0];
    }
  }

  public get selectedHotel(): Hotel {
    return this._selectedHotel;
  }

  public setSelectedRating(rating: number): void {
    this._selectedRating = rating;
  }

  public get selectedRating(): number {
    return this._selectedRating;
  }

  public isSelectedRaiting(value: number): boolean {
    return value === this._selectedRating;
  }
}
