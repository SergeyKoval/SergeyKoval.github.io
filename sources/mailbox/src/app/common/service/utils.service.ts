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

  public static getPageFirstItem(items: {}[], pageNumber: number, itemsPerPage: number): number {
    return pageNumber * itemsPerPage - itemsPerPage;
  }

  public static getPageLastItem(items: {}[], pageNumber: number, itemsPerPage: number): number {
    const itemsLength: number = items ? items.length : 0;
    const lastItemPage: number = pageNumber * itemsPerPage;
    return lastItemPage <= itemsLength ? lastItemPage : itemsLength;
  }
}
