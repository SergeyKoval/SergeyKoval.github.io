import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  private static readonly PARENT_ROUTE_PATH: string = '/mailbox/';

  public static joinUrl(urlSuffix: string): string {
    return `${UtilsService.PARENT_ROUTE_PATH}${urlSuffix}`;
  }

  public static sameUrl(url: string, menuItem: LeftMenuItem): boolean {
    return url === menuItem.href || url === UtilsService.joinUrl(menuItem.href);
  }
}
