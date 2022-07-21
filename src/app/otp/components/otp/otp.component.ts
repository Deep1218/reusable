import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'otp-component',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class Otp implements OnInit {
  // configuration
  @Input('otpLength') otpLength!: number;
  @Input('formTitle') formTitle!: string;
  @Input('formMessage') formMessage!: string;

  @Output() onVerify = new EventEmitter<number>();

  // variables
  otpForm!: FormGroup;
  numbers: number[] = [];
  loaderVisible = false;

  constructor(private fb: FormBuilder) {}

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
  }

  // EVENT FIRED WHEN: User types into any of the otp inputs
  onInput(e: any) {
    let key = e.key;
    let current = this.otpForm.get(e.target.id);
    let next = e.target.nextElementSibling;
    let prev = e.target.previousElementSibling;
    if (key == 'Backspace') {
      current?.setValue('');
      return prev.focus();
    }
    if (isNaN(parseInt(key))) return;
    current?.setValue(key);
    if (next) {
      next.focus();
    } else {
      this.verify();
      e.target.blur();
    }
  }

  // EVENT FIRED WHEN: User types in last input or submit form using verify button
  verify() {
    if (this.otpForm.invalid) return this.otpForm.markAllAsTouched();
    this.isVerifing(true);
    let otp = parseInt(Object.values(this.otpForm.value).join(''));
    this.onVerify.emit(otp);
  }

  isVerifing(isVerifing: boolean) {
    this.loaderVisible = isVerifing;
  }

  invalidOTP() {
    for (let i = 0; i <= this.otpLength; i++) {
      this.otpForm.get(i.toString())?.setErrors({ invalid: true });
    }
  }
}
