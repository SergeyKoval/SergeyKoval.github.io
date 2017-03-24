import { Component } from '@angular/core';

import {Hotel} from './Hotel';
import {City} from './City';
import {environment} from '../../environments/environment';

@Component({
  selector: 'widget',
  templateUrl: 'widget.component.html',
  styleUrls: ['widget.component.css']
})
export class WidgetComponent {
  public hotels: Hotel[] = [
    new Hotel('Tiffany Roma Suite', 'Via Antonio Salandra 6, Via Veneto', '+375291112345', 300, 500,
              environment.imagePath + '46.jpg', environment.imagePath + 'r46074236.jpg',
              environment.imagePath + 'b1.jpg', environment.imagePath + 'res.jpg',
              new City('Rome', 25, 20)
    ),
    new Hotel('Stardust Rome', 'Via Ostia 28, Vatican City - Prati', '+375299984538', 311, 595,
              environment.imagePath + '61694.jpg', environment.imagePath + 'r61694.jpg',
              environment.imagePath + '7384495.jpg', environment.imagePath + 'res7384495.jpg',
              new City('Bologna', 26, 18)
    ),
    new Hotel('Santamaria Inn', 'Via Rattazzi 2C, Central Station', '+375294582298', 405, 984,
              environment.imagePath + '61321.jpg', environment.imagePath + 'r61321.jpg',
              environment.imagePath + '21140.jpg', environment.imagePath + 'res21140.jpg',
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

  public set selectedHotel(hotel: Hotel) {
    this._selectedHotel = hotel;
  }
}
