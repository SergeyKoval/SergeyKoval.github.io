import { Pipe, PipeTransform } from '@angular/core';

import {UtilsService} from '../service/utils.service';

@Pipe({
  name: 'activeMenu'
})
export class ActiveMenuPipe implements PipeTransform {
  public constructor(private _utilsService: UtilsService) {}

  public transform(value: string): string {
    return this._utilsService.joinUrl(value);
  }
}
