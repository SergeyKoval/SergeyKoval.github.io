import {environment} from '../../../environments/environment';

export const hotels: Hotel[] = [
  {
    name: 'Tiffany Roma Suite',
    rating: 3,
    address: 'Via Antonio Salandra 6, Via Veneto',
    telephone: '+375291112345',
    following: 300,
    followers: 500,
    image: environment.imagePath + '46.jpg',
    imagePreview: environment.imagePath + 'r46074236.jpg',
    additionalImage: environment.imagePath + 'b1.jpg',
    additionalImagePreview: environment.imagePath + 'res.jpg',
    city: {
      name: 'Rome',
      airTemperature: 25,
      waterTemperature: 20
    }
  },
  {
    name: 'Stardust Rome',
    rating: 4,
    address: 'Via Ostia 28, Vatican City - Prati',
    telephone: '+375299984538',
    following: 311,
    followers: 595,
    image: environment.imagePath + '61694.jpg',
    imagePreview: environment.imagePath + 'r61694.jpg',
    additionalImage: environment.imagePath + '7384495.jpg',
    additionalImagePreview: environment.imagePath + 'res7384495.jpg',
    city: {
      name: 'Bologna',
      airTemperature: 26,
      waterTemperature: 18
    }
  },
  {
    name: 'Santamaria Inn',
    rating: 5,
    address: 'Via Rattazzi 2C, Central Station',
    telephone: '+375294582298',
    following: 405,
    followers: 984,
    image: environment.imagePath + '61321.jpg',
    imagePreview: environment.imagePath + 'r61321.jpg',
    additionalImage: environment.imagePath + '21140.jpg',
    additionalImagePreview: environment.imagePath + 'res21140.jpg',
    city: {
      name: 'Parma',
      airTemperature: 23,
      waterTemperature: 15
    }
  }
];
