import { TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FormsService } from './forms.service';

describe('FormsService', () => {
  let service: FormsService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ReactiveFormsModule] });
    service = TestBed.inject(FormsService);
  });

  it('should be created and form has only password control', () => {
    expect(service.form.value).toEqual({ password: '' });
    expect(service).toBeTruthy();
  });

  it('should set form value with email and password', () => {
    service.createForm(0);
    expect(service.form.value).toEqual({ password: '', email: '' });
  });
  it('should set form value with username and password', () => {
    service.createForm(1);
    expect(service.form.value).toEqual({ password: '', username: '' });
  });
  it('should set form value with phone number and password', () => {
    service.createForm(2);
    expect(service.form.value).toEqual({ password: '', phoneNumber: '' });
  });
  it('should set form value with email and password and recaptcha', () => {
    service.createForm(0, true);
    expect(service.form.value).toEqual({
      password: '',
      email: '',
      recaptcha: '',
    });
  });
  it('should set form value with username and password and recaptcha', () => {
    service.createForm(1, true);
    expect(service.form.value).toEqual({
      password: '',
      username: '',
      recaptcha: '',
    });
  });
  it('should set form value with phone number and password and recaptcha', () => {
    service.createForm(2, true);
    expect(service.form.value).toEqual({
      password: '',
      phoneNumber: '',
      recaptcha: '',
    });
  });
});
