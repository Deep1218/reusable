import { Component } from '@angular/core';
import { OtpService } from './otp/services/otp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private otpService: OtpService) {
    this.otpService.onVerify.subscribe((otp) => {
      console.log(otp);
    });
  }

  showComponentUsingTemplate = false;

  show() {
    this.otpService.show({
      formMessage: 'this is form message',
      formTitle: 'sFirst',
      otpLength: 6,
    });
  }
  verify(otp: number) {
    console.log(otp);
  }
}
