import { Pipe, PipeTransform } from '@angular/core';

import {Contact} from '../model/Contact';

@Pipe({
  name: 'contact'
})
export class ContactPipe implements PipeTransform {
  public transform(contact: Contact): string {
    if (!contact.firstName && !contact.lastName) {
      return contact.email;
    } else {
      return `${contact.firstName} ${contact.lastName}`;
    }
  }
}
