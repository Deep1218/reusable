![Logo](https://www.solutionanalysts.com/wp-content/uploads/2021/02/SA-Logo-high.png)

# Login Form With Recaptcha

## Description

This is the service which is developed under the Angular 13.0.0 framework to provide the easier and fast creation of the of the form with some predefine fields form which which you can choose. For reCaptcha we have used `bash ngx-recaptcha` [package](https://github.com/Enngage/ngx-captcha).

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

import the following modules to use this service.
