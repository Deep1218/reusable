import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  public createForm(option?: string, recaptcha: boolean = false): FormGroup {
    switch (option) {
      case 'email':
        let emailCtrl = new FormControl();
        this.form.addControl('email', emailCtrl);
        emailCtrl.setValidators([
          Validators.required,
          Validators.pattern(
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          ),
        ]);
        break;
      case 'username':
        let usernameCtrl = new FormControl();
        this.form.addControl('username', usernameCtrl);
        usernameCtrl.setValidators([Validators.required]);
        break;
      case 'phoneNumber':
        let phoneNumberCtrl = new FormControl();
        this.form.addControl('phoneNumber', phoneNumberCtrl);
        phoneNumberCtrl.setValidators([Validators.required]);
        break;
    }

    // recaptcha
    if (recaptcha) {
      let recaptchaCtrl = new FormControl();
      this.form.addControl('recaptcha', recaptchaCtrl);
      recaptchaCtrl.setValidators([Validators.required]);
    }
    return this.form;
  }
}
