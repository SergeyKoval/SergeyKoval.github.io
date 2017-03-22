import {City} from './City';

export class Hotel {
  public constructor(
    public name: string,
    public address: string,
    public telephone: string,
    public followers: number,
    public following: number,
    public image: string,
    public imagePreview: string,
    public additionalImage: string,
    public additionalImagePreview: string,
    public city: City
  ) {}
}
