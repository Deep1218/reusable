import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';
import { FormsService } from 'src/app/service/forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('captchaElem') captchaElem!: ReCaptcha2Component;
  loginForm: FormGroup;

  constructor(private formService: FormsService) {
    this.loginForm = this.formService.createLoginForm('email');
  }

  ngOnInit(): void {}

  onSubmitLogin() {
    console.log('Form submitted');
  }

  // Below methods are used only for recaptcha
  handleSuccess(data: any) {
    console.log(data);
  }

  handleReset(): void {
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
