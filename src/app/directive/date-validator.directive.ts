import {
  ReactiveFormsModule,
  NG_VALIDATORS,
  FormsModule,
  FormGroup,
  FormControl,
  ValidatorFn,
  Validator
} from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[datevalidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateValidator,
      multi: true
    }
  ]
})

export class DateValidator implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.dateValidator();
  }
  validate(c: FormControl) {
    return this.validator(c);
  }

  dateValidator(): ValidatorFn {
    return (c: FormControl) => {
      let isValid = true;
      if (c.value) {
        let  data  = c.value.split("/");
        let d = new Date(data[2] + '/' + data[0] + '/' + data[1]);
        isValid = d && (d.getMonth() + 1) == data[0] && d.getDate() == Number(data[1]) && d.getFullYear() == Number(data[2]);
      }

      console.log('myDate', isValid);

      if (isValid) {
        return null;
      } else {

        return {
          datevalidator: {
            valid: false
          }
        };
      }

    }
  }
}
