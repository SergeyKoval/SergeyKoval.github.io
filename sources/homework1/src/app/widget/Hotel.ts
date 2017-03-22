import {City} from './City';
import {Popularity} from './Popularity';

export class Hotel {
  public constructor(
    public name: string,
    public address: string,
    public telephone: string,
    public image: string,
    public imagePreview: string,
    public city: City,
    public popularity: Popularity
  ) {}
}
