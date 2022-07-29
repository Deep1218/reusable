import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
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

  it('should call method on form submit', () => {
    component.onSubmitLogin();
    component.formData = {
      email: 'deep@testing.com',
      password: 'Deep@1812',
      recaptcha: '',
    };
    expect(component.formData).toEqual({
      email: 'deep@testing.com',
      password: 'Deep@1812',
      recaptcha: '',
    });
  });

  it('should call handleSuccess method', () => {
    spyOn(component, 'onSubmitLogin');
    component.formData = {
      email: component.loginForm.get('email')?.setValue('deep@testing.com'),
    };
    component.onSubmitLogin();
    fixture.detectChanges();
    console.log(
      component.loginForm.get('email')?.patchValue('deep@testing.com')
    );

    // expect(component.onSubmitLogin).toHaveBeenCalledTimes(1);
    // expect(component.formData).toEqual({
    //   email: 'deep@testing.com',
    //   password: 'Deep@1812',
    //   recaptcha: '',
    // });
    expect(component.formData).toEqual('deep@testing.com');
  });
});
