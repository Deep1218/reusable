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

  onSubmitLogin() {
    this.formData = this.loginForm.value;
  }

  // Below methods are used only for recaptcha
  handleSuccess(data: any) {
    console.log(data);
  }

  handleReset() {
    this.captchaElem.resetCaptcha();
  }

  handleExpire() {
    console.log('Expired');
    this.captchaElem.reloadCaptcha();
  }

  handleLoad() {
    console.log('Loaded');
  }
}
