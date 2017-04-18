import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormGroup} from '@angular/forms';

import {Observable} from 'rxjs/Observable';

import {MailsService} from '../../../common/service/mails.service';
import {MenuService} from '../../../common/service/menu.service';
import {UtilsService} from 'app/common/service/utils.service';
import {ContactsService} from '../../../common/service/contacts.service';
import {Contact} from '../../../common/model/Contact';
import {Mail} from '../../../common/model/Mail';

import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/last';

@Component({
  selector: 'mailbox-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.css']
})
export class MailComposeComponent implements OnInit {
  public type: string;
  public mailForm: FormGroup;
  public errorMessage: string;
  private _previousActiveMenuItem: MenuItem;

  public constructor(
    private _activatedRoute: ActivatedRoute,
    private _contactsService: ContactsService,
    private _mailService: MailsService,
    private _menuService: MenuService,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    Observable.zip(
      this._activatedRoute.data,
      this._activatedRoute.queryParams
    ).subscribe((result: [{mail: Mail, type: string}, {all: string}]) => {
      this.type = result[0].type;
      this.mailForm = this._mailService.initMailForm(this.type, result[0].mail, result[1].all);
    });

    this._menuService.activeMenuItem.subscribe((activeMenuItem: MenuItem) => {
      this._previousActiveMenuItem = activeMenuItem;
    });
  }

  public evaluateEmail(): void {
    const receiverEmail: AbstractControl = this.mailForm.controls.receiverEmail;
    if (receiverEmail.invalid) {
      this.errorMessage = 'Invalid email address';
      return;
    }

    let contact: Contact;
    this.errorMessage = '';
    const email: string = receiverEmail.value.trim();
    this._contactsService.contactSearch.subscribe((contacts: Contact[]) => {
      if (contacts.length === 0) {
        contact = Contact.init(email);
      } else {
        contact = Contact.initFromContact(contacts[0]);
      }

      let contactPresent: boolean = false;
      const receivers: Contact[] = this.mailForm.controls.receivers.value;
      for (const receiver of receivers) {
        if (contact.isEqual(receiver)) {
          contactPresent = true;
          break;
        }
      }
      if (!contactPresent) {
        receivers.push(contact);
      }
      receiverEmail.setValue('');
    });
    this._contactsService.searchContact(email);
  }

  public removeReceiver(contact: Contact): void {
    const receivers: Contact[] = this.mailForm.controls.receivers.value;
    receivers.splice(receivers.indexOf(contact, 0), 1);
  }

  public sendMail(type: string): void {
    const formControls: {[key: string]: AbstractControl} = this.mailForm.controls;
    if (formControls.receivers.value.length === 0) {
      this.errorMessage = 'Empty receivers';
      return;
    }

    if (formControls.topic.invalid) {
      this.errorMessage = 'Subject min length is 3 symbols';
      return;
    }

    if (formControls.body.invalid) {
      this.errorMessage = 'Body min length is 3 symbols';
      return;
    }

    this.mailForm.removeControl('receiverEmail');
    formControls.time.setValue(new Date().getTime());
    formControls.type.setValue(type);
    formControls.ownerType.setValue(`${formControls.owner.value}${type}`);
    this._mailService.addMail(this.mailForm.value);
    this._router.navigate([UtilsService.joinUrl(this._previousActiveMenuItem.href)]);
  }
}
