import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeMenu'
})
export class ActiveMenuPipe implements PipeTransform {
  private static readonly PARENT_ROUTE_PATH: string = 'mailbox/';

  public transform(value: string): string {
    return `${ActiveMenuPipe.PARENT_ROUTE_PATH}${value}`;
  }
}
