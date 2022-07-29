import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { Otp } from './otp.component';

describe('Otp', () => {
  let component: Otp;
  let fixture: ComponentFixture<Otp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Otp],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Otp);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should input otp and verify', fakeAsync(() => {
    component.otpLength = 4;
    component.formTitle = 'hello';
    component.formMessage = 'this is description.';
    fixture.detectChanges();

    let verifySpy = spyOn(component, 'verify').and.callThrough();
    let inp1 = fixture.nativeElement.querySelector('#inp1');
    inp1.focus();

    let keys = ['1', '3', 'Backspace', '2', '3', 'f', '4'];
    for (let key of keys) {
      let keyEvent = new KeyboardEvent('keyup', { key });
      inp1.ownerDocument.activeElement.dispatchEvent(keyEvent);
    }

    expect(verifySpy).toHaveBeenCalledTimes(1);
    let otp = Object.values(component.otpForm.value).join('');
    expect(otp).toBe('1234');
  }));

  it('focus all input when otp not entered', () => {
    component.otpLength = 4;
    component.formTitle = 'hello';
    component.formMessage = 'this is description.';
    fixture.detectChanges();

    let verifyBtn = fixture.nativeElement.querySelector(
      "button[type='submit']"
    );
    verifyBtn.click();
    expect(component.otpForm.invalid).toBe(true);
  });

  it('set error if submited invalid otp', () => {
    component.otpLength = 4;
    component.formTitle = 'hello';
    component.formMessage = 'this is description.';
    fixture.detectChanges();

    expect(component.otpForm.get('1')?.errors?.['invalid']).toBe(undefined);
    component.invalidOTP();
    fixture.detectChanges();
    expect(component.otpForm.get('1')?.errors?.['invalid']).toBe(true);
  });
});
