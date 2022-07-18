import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css'],
})
export class OtpPageComponent implements OnInit {
  // configuration
  otpLength = 4;

  // variables
  otpForm!: FormGroup;
  numbers: number[] = [];
  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.otpForm = this.fb.group({});
    for (let i = 1; i <= this.otpLength; i++) {
      this.numbers.push(i);
      this.otpForm.addControl(
        i.toString(),
        new FormControl('', [
          Validators.required,
          Validators.min(0),
          Validators.max(9),
        ])
      );
    }
    this.route.params.subscribe((params: any) => {
      console.log(params.token);
    });
  }

  verify() {
    if (this.otpForm.invalid) {
      this.otpForm.markAllAsTouched();
      return;
    }
    console.log(this.otpForm);
  }
}
