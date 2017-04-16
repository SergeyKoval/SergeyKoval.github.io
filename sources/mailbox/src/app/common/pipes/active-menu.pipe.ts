import { Pipe, PipeTransform } from '@angular/core';

import {UtilsService} from '../service/utils.service';

@Pipe({
  name: 'activeMenu'
})
export class ActiveMenuPipe implements PipeTransform {
  public transform(value: string): string {
    return UtilsService.joinUrl(value);
  }
}
