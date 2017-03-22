import { Component } from '@angular/core';

import {Hotel} from './Hotel';
import {City} from './City';

@Component({
  selector: 'widget',
  templateUrl: 'widget.component.html',
  styleUrls: ['widget.component.css']
})
export class WidgetComponent {
  public hotels: Hotel[] = [
    new Hotel('Tiffany Roma Suite', 'Via Antonio Salandra 6, Via Veneto', '+375291112345', 300, 500,
              '../assets/images/46074236.jpg', '../assets/images/r46074236.jpg', '../assets/images/b1.jpg', '../assets/images/res.jpg',
      new City('Rome', 25, 20)
    ),
    new Hotel('Stardust Rome', 'Via Ostia 28, Vatican City - Prati', '+375299984538', 311, 595,
              '../assets/images/61694.jpg', '../assets/images/r61694.jpg', '../assets/images/7384495.jpg', '../assets/images/res7384495.jpg',
      new City('Bologna', 26, 18)
    ),
    new Hotel('Santamaria Inn', 'Via Rattazzi 2C, Central Station', '+375294582298', 405, 984,
              '../assets/images/61321.jpg', '../assets/images/r61321.jpg', '../assets/images/21140.jpg', '../assets/images/res21140.jpg',
      new City('Parma', 23, 15),
    )
  ];

  public _selectedHotel: Hotel = this.hotels[0];

  public setSelectedHotel(hotel: Hotel): void {
    this._selectedHotel = hotel;
  }

  public get selectedHotel(): Hotel {
    return this._selectedHotel;
  }
}
