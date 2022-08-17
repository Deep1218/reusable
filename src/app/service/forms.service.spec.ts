import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsService } from './forms.service';

describe('FormsService', () => {
  let service: FormsService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ReactiveFormsModule] });
    service = TestBed.inject(FormsService);
  });
  describe('Login', () => {
    it('should be created and form has only password control', () => {
      expect(service.form.value).toEqual({ password: '' });
      expect(service).toBeTruthy();
    });

    it('should set form value with email and password', () => {
      service.createLoginForm(0);
      expect(service.form.value).toEqual({ password: '', email: '' });
    });
    it('should set form value with username and password', () => {
      service.createLoginForm(1);
      expect(service.form.value).toEqual({ password: '', username: '' });
    });
    it('should set form value with phone number and password', () => {
      service.createLoginForm(2);
      expect(service.form.value).toEqual({ password: '', phoneNumber: '' });
    });
    it('should set form value with email and password and recaptcha', () => {
      service.createLoginForm(0, true);
      expect(service.form.value).toEqual({
        password: '',
        email: '',
        recaptcha: '',
      });
    });
    it('should set form value with username and password and recaptcha', () => {
      service.createLoginForm(1, true);
      expect(service.form.value).toEqual({
        password: '',
        username: '',
        recaptcha: '',
      });
    });
    it('should set form value with phone number and password and recaptcha', () => {
      service.createLoginForm(2, true);
      expect(service.form.value).toEqual({
        password: '',
        phoneNumber: '',
        recaptcha: '',
      });
    });
  });

  describe('SignUp', () => {
    it('should be created and form has only password and confirm password control', () => {
      expect(service.form.value).toEqual({ password: '' });
      expect(service).toBeTruthy();
    });

    it('should set form value with confirm password and password', () => {
      service.createSignUpForm({});
      expect(service.form.value).toEqual({ password: '', confirmPassword: '' });
    });
    it('should set form value with password, confirmPasswor, firstName, lastName, and username', () => {
      service.createSignUpForm({
        firstName: true,
        lastName: true,
        username: true,
      });
      expect(service.form.value).toEqual({
        password: '',
        confirmPassword: '',
        username: '',
        firstName: '',
        lastName: '',
      });
    });
    it('should set form value with phone number, password, confirm password, first name, last name, and username', () => {
      service.createSignUpForm({
        firstName: true,
        lastName: true,
        username: true,
        phoneNumber: true,
      });
      expect(service.form.value).toEqual({
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        username: '',
        firstName: '',
        lastName: '',
      });
    });
    it('should set form value with phone number, email, password, confirm password, first name, last name, and username', () => {
      service.createSignUpForm({
        firstName: true,
        lastName: true,
        username: true,
        phoneNumber: true,
        email: true,
      });
      expect(service.form.value).toEqual({
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        username: '',
        firstName: '',
        lastName: '',
        email: '',
      });
    });
    it('should set form value with phone number, email, password, confirm password, first name, last name, profile picture and username', () => {
      service.createSignUpForm({
        firstName: true,
        lastName: true,
        username: true,
        phoneNumber: true,
        email: true,
        profilePic: true,
      });
      expect(service.form.value).toEqual({
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        profilePic: '',
      });
    });

    it('should set form value with confirm password, recaptcha and password', () => {
      service.createSignUpForm({}, true);
      expect(service.form.value).toEqual({
        password: '',
        confirmPassword: '',
        recaptcha: '',
      });
    });
    it('should set form value with password, confirm password, firstName, lastName, recaptcha and username', () => {
      service.createSignUpForm(
        { firstName: true, lastName: true, username: true },
        true
      );
      expect(service.form.value).toEqual({
        password: '',
        confirmPassword: '',
        username: '',
        firstName: '',
        lastName: '',
        recaptcha: '',
      });
    });
    it('should set form value with phone number, password, confirm password, first name, last name, recaptcha and username', () => {
      service.createSignUpForm(
        { firstName: true, lastName: true, username: true, phoneNumber: true },
        true
      );
      expect(service.form.value).toEqual({
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        username: '',
        firstName: '',
        lastName: '',
        recaptcha: '',
      });
    });
    it('should set form value with phone number, email, password, confirm password, first name, last name, recaptcha and username', () => {
      service.createSignUpForm(
        {
          firstName: true,
          lastName: true,
          username: true,
          phoneNumber: true,
          email: true,
        },
        true
      );
      expect(service.form.value).toEqual({
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        recaptcha: '',
      });
    });
    it('should set form value with phone number, email, password, confirm password, first name, last name, profile picture, username and recaptcha', () => {
      service.createSignUpForm(
        {
          firstName: true,
          lastName: true,
          username: true,
          phoneNumber: true,
          email: true,
          profilePic: true,
        },
        true
      );
      expect(service.form.value).toEqual({
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        profilePic: '',
        recaptcha: '',
      });
    });
  });
  describe('Card Form', () => {
    it('should create card form', () => {
      service.createCardForm();
      expect(service.form.value).toEqual({
        cardNumber: '',
        expiryDate: '',
        cvvCode: '',
        cardHolderName: '',
      });
    });
  });
});
