import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgxCaptchaModule } from 'ngx-captcha';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [ReactiveFormsModule, NgxCaptchaModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    setTimeout(() => {
      fixture.detectChanges();
    }, 2000);
  });

  it('should create and set sign up form as per the method called', () => {
    if (
      !component.signupForm.contains('firstName') &&
      !component.signupForm.contains('lastName') &&
      !component.signupForm.contains('email') &&
      !component.signupForm.contains('username') &&
      !component.signupForm.contains('phoneNumber')
    ) {
      if (component.signupForm.contains('recaptcha')) {
        expect(component.signupForm.value).toEqual({
          password: '',
          confirmPassword: '',
          recaptcha: '',
        });
      } else {
        expect(component.signupForm.value).toEqual({
          password: '',
          confirmPassword: '',
        });
      }
    } else if (
      component.signupForm.contains('firstName') &&
      component.signupForm.contains('lastName') &&
      component.signupForm.contains('email') &&
      component.signupForm.contains('username') &&
      component.signupForm.contains('phoneNumber')
    ) {
      if (component.signupForm.contains('recaptcha')) {
        expect(component.signupForm.value).toEqual({
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
          recaptcha: '',
        });
      } else {
        expect(component.signupForm.value).toEqual({
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
        });
      }
    }
    expect(component).toBeTruthy();
  });

  it('should call method onSubmitLogin when form submit', () => {
    component.signupForm.patchValue({
      firstName: 'Deep',
      lastName: 'Patel',
      phoneNumber: '8866438045',
      username: 'Deep1218',
      email: 'deep@testing.com',
      password: 'Deep@1812',
      confirmPassword: 'Deep@1812',
      recaptcha: 'anyrandomstring',
    });
    fixture.debugElement
      .query(By.css('form'))
      .triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
    expect(component.formData).toEqual({
      firstName: 'Deep',
      lastName: 'Patel',
      phoneNumber: '8866438045',
      username: 'Deep1218',
      email: 'deep@testing.com',
      password: 'Deep@1812',
      confirmPassword: 'Deep@1812',
      recaptcha: 'anyrandomstring',
    });
  });

  describe('recaptcha', () => {
    it('should call handleLoad method', () => {
      let handleLoadSpy = spyOn(component, 'handleLoad').and.callThrough();
      component.handleLoad();
      expect(handleLoadSpy).toHaveBeenCalledTimes(1);
    });

    it('should call handleSuccess method', () => {
      let handleSuccessSpy = spyOn(
        component,
        'handleSuccess'
      ).and.callThrough();
      component.handleSuccess('Success handler working');
      expect(handleSuccessSpy).toHaveBeenCalledTimes(1);
    });

    xit('should load on component create', () => {
      component.signupForm.patchValue({
        firstName: 'Deep',
        lastName: 'Patel',
        phoneNumber: '8866438045',
        username: 'Deep1218',
        email: 'deep@testing.com',
        password: 'Deep@1812',
        confirmPassword: 'Deep@1812',
        recaptcha: 'anyrandomstring',
      });
      fixture.detectChanges();

      let debugElement = fixture.debugElement;
      let recaptchaElement = debugElement.query(
        By.css('.recaptcha')
      ).nativeElement;

      expect(recaptchaElement).toBeTruthy();
    });
  });
});
