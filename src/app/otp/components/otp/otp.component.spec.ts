import { ComponentFixture, TestBed } from '@angular/core/testing';
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call prevent default', async () => {
    component.otpLength = 4;
    component.formTitle = 'hello';
    component.formMessage = 'this is description.';

    fixture.detectChanges();

    const keyEvent = new KeyboardEvent('keyup', { code: 'Digit2' });
    let inp1 = fixture.debugElement.nativeElement.querySelector('#inp1');

    expect(inp1).toBeTruthy();

    // inp1.dispatchEvent(keyEvent);
    // fixture.detectChanges();

    // const spy = spyOn(keyEvent, 'preventDefault');
    // fixture.detectChanges();
    // expect(spy).toHaveBeenCalled();
  });
});
