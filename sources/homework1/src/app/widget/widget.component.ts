import { Component } from '@angular/core';

import {Hotel} from './Hotel';
import {City} from './City';
import {Popularity} from './Popularity';

@Component({
  selector: 'widget',
  templateUrl: 'widget.component.html',
  styleUrls: ['widget.component.css']
})
export class WidgetComponent {
  public hotels: Hotel[] = [
    new Hotel('Tiffany Roma Suite', 'Via Antonio Salandra 6, Via Veneto', '+375291112345', '../assets/images/1.jpg', '../assets/images/r1.jpg',
      new City('Rome', 25, 20),
      new Popularity('', '../assets/images/res.jpg', 300, 500)
    ),
    new Hotel('Stardust Rome', 'Via Ostia 28, Vatican City - Prati', '+375299984538', '../assets/images/61694.jpg', '../assets/images/r61694.jpg',
      new City('Rome', 25, 20),
      new Popularity('', '../assets/images/res7384495.jpg', 300, 500)
    ),
    new Hotel('Santamaria Inn', 'Via Rattazzi 2C, Central Station', '+375294582298', '../assets/images/61321.jpg', '../assets/images/r61321.jpg',
      new City('Rome', 25, 20),
      new Popularity('', '../assets/images/res21140.jpg', 300, 500)
    )
  ];

  public selectedHotel: Hotel = this.hotels[0];
}
