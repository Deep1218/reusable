import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otp } from './otp.component';

describe('Otp', () => {
  let component: Otp;
  let fixture: ComponentFixture<Otp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Otp],
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
});
