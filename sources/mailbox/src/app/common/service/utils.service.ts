import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  private static readonly PARENT_ROUTE_PATH: string = '/mailbox/';

  public joinUrl(urlSuffix: string): string {
    return `${UtilsService.PARENT_ROUTE_PATH}${urlSuffix}`;
  }

  public sameUrl(url: string, menuItem: LeftMenuItem): boolean {
    return url === menuItem.href || url === this.joinUrl(menuItem.href);
  }
}
