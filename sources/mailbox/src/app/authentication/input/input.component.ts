import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'authentication-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input()
  public input: FormControl;
  @Input()
  public type: string;
  @Input()
  public submitted: boolean;

  public isInvalidValue(): boolean {
    return (!this.input.pristine || this.submitted) && this.input.invalid;
  }

  public isEditing(): boolean {
    return this.input.dirty && this.input.value.length > 0;
  }
}
