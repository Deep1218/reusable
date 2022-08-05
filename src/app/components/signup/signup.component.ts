import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';
import { FormsService } from 'src/app/service/forms.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  @ViewChild('captchaElem') captchaElem!: ReCaptcha2Component;
  signupForm!: FormGroup;
  formData: any;

  constructor(private formService: FormsService) {
    this.signupForm = this.formService.createSignUpForm({firstName:true,lastName:true,email:true, username:true, phoneNumber:true}, true);
    console.log(this.signupForm);
  }

  onSubmit(){
    this.formData = this.signupForm.value
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
