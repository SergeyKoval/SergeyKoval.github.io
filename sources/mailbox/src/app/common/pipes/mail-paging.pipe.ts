import { Pipe, PipeTransform } from '@angular/core';

import {UtilsService} from '../service/utils.service';
import {Mail} from '../model/Mail';

@Pipe({
  name: 'mailPaging'
})
export class MailPagingPipe implements PipeTransform {
  public static readonly MAILS_PER_PAGE: number = 10;

  public transform(mails: Mail[], page: number): Mail[] {
    if (!mails) {
      return [];
    }

    const startIndex: number = UtilsService.getPageFirstItem(mails, page, MailPagingPipe.MAILS_PER_PAGE);
    const endIndex: number = UtilsService.getPageLastItem(mails, page, MailPagingPipe.MAILS_PER_PAGE);
    return mails.slice(startIndex, endIndex);
  }
}
