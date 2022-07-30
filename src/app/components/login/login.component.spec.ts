import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgxCaptchaModule } from 'ngx-captcha';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, NgxCaptchaModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and set loginForm as per the method called', () => {
    if (component.loginForm.contains('email')) {
      if (component.loginForm.contains('recaptcha')) {
        expect(component.loginForm.value).toEqual({
          email: '',
          password: '',
          recaptcha: '',
        });
      } else {
        expect(component.loginForm.value).toEqual({ email: '', password: '' });
      }
    } else if (component.loginForm.contains('username')) {
      if (component.loginForm.contains('recaptcha')) {
        expect(component.loginForm.value).toEqual({
          username: '',
          password: '',
          recaptcha: '',
        });
      } else {
        expect(component.loginForm.value).toEqual({
          username: '',
          password: '',
        });
      }
    } else {
      if (component.loginForm.contains('recaptcha')) {
        expect(component.loginForm.value).toEqual({
          phoneNumber: '',
          password: '',
          recaptcha: '',
        });
      } else {
        expect(component.loginForm.value).toEqual({
          phoneNumber: '',
          password: '',
        });
      }
    }
    expect(component).toBeTruthy();
  });

  it('should call method onSubmitLogin when form submit', () => {
    component.loginForm.patchValue({
      email: 'deep@testing.com',
      password: 'Deep@1812',
      recaptcha: 'anyrandomstring',
    });
    fixture.debugElement
      .query(By.css('form'))
      .triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
    expect(component.formData).toEqual({
      password: 'Deep@1812',
      email: 'deep@testing.com',
      recaptcha: 'anyrandomstring',
    });
  });
  describe('recaptcha', () => {
    it('shloud load on form valid', () => {
      component.loginForm.patchValue({
        email: 'deep@testing.com',
        password: 'Deep@1812',
      });
      let captchaDiv = fixture.nativeElement.querySelector('ngx-recaptcha2');
      console.log(captchaDiv);

      expect(component.captchaElem.load).toBeTruthy();
    });
  });
});
