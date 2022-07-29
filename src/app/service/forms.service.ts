import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

enum fieldOption {
  EMAIL,
  USERNAME,
  PHONENUMBER,
}
@Injectable({
  providedIn: 'root',
})
export class FormsService {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    // Regex for Password :-
    // - Min 8 character and Max 64 character
    // - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
    // - Can contain special characters
    this.form = this.fb.group({
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).{8,64})'
          ),
        ],
      ],
    });
  }

  public createForm(field: fieldOption, recaptcha: boolean = false): FormGroup {
    switch (field) {
      case fieldOption.EMAIL:
        let emailCtrl = new FormControl('');
        this.form.addControl('email', emailCtrl);
        emailCtrl.setValidators([
          Validators.required,
          Validators.pattern(
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          ),
        ]);
        break;
      case fieldOption.USERNAME:
        let usernameCtrl = new FormControl('');
        this.form.addControl('username', usernameCtrl);
        // Regex for Username :-
        // The first character is a letter
        // The input contains only alphanumeric characters and it can contain '_'
        // The input is 6-32 characters long
        usernameCtrl.setValidators([
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z0-9.\\-_]{5,31}'),
        ]);
        break;
      case fieldOption.PHONENUMBER:
        let phoneNumberCtrl = new FormControl('');
        this.form.addControl('phoneNumber', phoneNumberCtrl);
        // Regex for Phone Number :-
        // 11-12 digit phone numbers with optional group characters and + char at the begining
        phoneNumberCtrl.setValidators([
          Validators.required,
          Validators.pattern(
            '(\\+?( |-|\\.)?[0-9]{1,2}( |-|\\.)?)?(\\(?[0-9]{3}\\)?|[0-9]{3})( |-|\\.)?([0-9]{3}( |-|\\.)?[0-9]{4})'
          ),
        ]);
        break;
    }

    // recaptcha
    if (recaptcha) {
      let recaptchaCtrl = new FormControl('');
      this.form.addControl('recaptcha', recaptchaCtrl);
      recaptchaCtrl.setValidators([Validators.required]);
    }
    return this.form;
  }
}
