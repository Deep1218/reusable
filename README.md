![Logo](https://www.solutionanalysts.com/wp-content/uploads/2021/02/SA-Logo-high.png)

# Login Form With Recaptcha

## Description

This is the service which is developed under the Angular 13.0.0 framework to provide the easier and fast creation of the of the form with some predefine fields form which which you can choose. For reCaptcha we have used `ngx-recaptcha` ![package](https://github.com/Enngage/ngx-captcha).

## Configuration

```bash
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgxCaptchaModule],
  })

export class AppModule { }
```

import the following modules in the `app.module.ts` file to use this service.

Copy and Past the below 2 file to your project ![here](https://github.com/Deep1218/reusable/tree/login-with-recaptcha/src/app/service).

1. forms.service.ts
2. forms.service.spec.ts (optional)

For google reCAPTCHA:-

If you want to use reCAPTCHA on your website you will require recaptcha site key and secret key.![Google ReCAPTCHA](https://www.google.com/recaptcha/admin/create)

After opeing and login fill the form as per the below image.
[recaptchaImage](./src/assets/img/Recaptcha.png)

After that you get the site and secret key which you have to past in the form where you want reCaptcha. For more configuration [Here](https://enngage.github.io/ngx-captcha/)

```bash
<ngx-recaptcha2
    class="recaptcha"
    #captchaElem
    [siteKey]="'PAST_YOUR_SITE_KEY'"
    (reset)="handleReset()"
    (expire)="handleExpire()"
    (load)="handleLoad()"
    (success)="handleSuccess($event)"
    [useGlobalDomain]="false"
    [size]="'normal'"
    [hl]="'en'"
    [theme]="'light'"
    [type]="'image'"
    formControlName="recaptcha"
>
</ngx-recaptcha2>
```

## How to Use Forms Service

After pasting the above 2 files to your project import the service in your component same as how we import other services.

### Without Recaptcha:-

```bash
import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsService } from 'src/app/service/forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class YOUR_COMPONENT {
  loginForm: FormGroup;
  formData: any;

  constructor(private formService: FormsService) {
    this.loginForm = this.formService.createForm(0, true);
  }
}
```

### Wtih Recaptcha:-

```bash
import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';
import { FormsService } from 'src/app/service/forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @ViewChild('captchaElem') captchaElem!: ReCaptcha2Component;
  loginForm: FormGroup;
  formData: any;

  constructor(private formService: FormsService) {
    this.loginForm = this.formService.createForm(0, true);
  }
}
```

## Forms Service

This service will return form group with selected form control. But password form control is fixed.

### Methods:-

| Field Options        | Description                                                                       |
| -------------------- | --------------------------------------------------------------------------------- |
| createForm(0);       | Will return the form group with email and password form control.                  |
| createForm(1);       | Will return the form group with username and password form control.               |
| createForm(1);       | Will return the form group with phoneNumber and password form control.            |
| createForm(0, true); | Will return the form group with email, password and recaptcha form control.       |
| createForm(1, true); | Will return the form group with username, password and recaptcha form control.    |
| createForm(1, true); | Will return the form group with phoneNumber, password and recaptcha form control. |

## Validation Regex Used:-

| Form Control Name | Regex                           | Description |
| ----------------- | ------------------------------- | ----------- |
| `username`        | `[a-zA-Z][a-zA-Z0-9.\-_]{5,31}` |

1.  The first character is a letter
2.  The input contains only alphanumeric characters and it can contain '\_'
3.  The input is 6-32 characters long |
