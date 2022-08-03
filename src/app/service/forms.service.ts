import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
declare interface test {
  firstName?:true 
  lastName?: true,
  username?: true,
  email?: true,
  phoneNumber?: true,
  profilePic?: true,
  recaptcha?: true
}

@Injectable({
  providedIn: 'root',
})

export class FormsService {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
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
  /**
   * @desc Method will create login form with the nec. And Return a FormGroup
   * @param option is a string allow you to choose the other field.
   * @param recaptcha is a boolean allow you to choose recaptcha.
   */
  public createLoginForm(
    option: string,
    recaptcha: boolean = false
  ): FormGroup {
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
      let recaptchaCtrl = new FormControl();
      this.form.addControl('recaptcha', recaptchaCtrl);
      recaptchaCtrl.setValidators([Validators.required]);
    }
    return this.form;
  }

  public createSignUpForm(options:test): FormGroup {
    // confirmPasswords
    let confirmPasswordCtrl = new FormControl();
      this.form.addControl('confirmPassword', confirmPasswordCtrl);
      confirmPasswordCtrl.setValidators([
        Validators.required,
        Validators.pattern(
          '((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).{8,64})'
        ),
      ]);

    // firstName
    if (options.firstName) {
      let firstNameCtrl = new FormControl();
      this.form.addControl('firstName', firstNameCtrl);
      firstNameCtrl.setValidators([
        Validators.required,
        Validators.pattern('^[A-za-z]*$'),
      ]);
    }

    // lastName
    if (options.lastName) {
      let lastNameCtrl = new FormControl();
      this.form.addControl('lastName', lastNameCtrl);
      lastNameCtrl.setValidators([
        Validators.required,
        Validators.pattern('^[A-za-z]*$'),
      ]);
    }

    // username
    if (options.username) {
      let usernameCtrl = new FormControl();
      this.form.addControl('username', usernameCtrl);
      usernameCtrl.setValidators([Validators.required]);
    }

    // email
    if (options.email) {
      let emailCtrl = new FormControl();
      this.form.addControl('email', emailCtrl);
      emailCtrl.setValidators([
        Validators.required,
        Validators.pattern(
          "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
        ),
      ]);
    }

    // profile pic
    if (options.profilePic) {
      let profilePicCtrl = new FormControl();
      this.form.addControl('profilePic', profilePicCtrl);
      profilePicCtrl.setValidators([
        Validators.required,
        Validators.pattern(''),
      ]);
    }

    // recaptcha
    if (options.recaptcha) {
      let recaptchaCtrl = new FormControl();
      this.form.addControl('recaptcha', recaptchaCtrl);
      recaptchaCtrl.setValidators([Validators.required]);
    }
    return this.form;
  }
}
