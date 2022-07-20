import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsService } from 'src/app/service/forms.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private formservice: FormsService) {
    this.signupForm = this.formservice.createSignUpForm();
  }

  ngOnInit(): void {}
}
