import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsService } from './service/forms.service';

let mockFormsService = jasmine.createSpyObj('FormsService', [
  'createLoginForm',
  'createSignUpForm',
  'createCardForm',
]);

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [AppComponent],
      providers: [{ provider: FormsService, useValue: mockFormsService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create app', () => {
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it('should set card form on create', () => {
    fixture.detectChanges();
    expect(app.cardForm.value).toEqual({
      cardNumber: '',
      expiryDate: '',
      cvvCode: '',
      cardHolderName: '',
    });
  });

  it('should call method onSubmit when form submit', () => {
    app.cardForm.patchValue({
      cardHolderName: 'Deep Patel',
      cardNumber: '4555 8555 6555 9555',
      cvvCode: '465',
      expiryDate: '2025-08-28',
    });

    fixture.debugElement
      .query(By.css('form'))
      .triggerEventHandler('ngSubmit', null);

    expect(app.formData).toEqual({
      cardHolderName: 'Deep Patel',
      cardNumber: '4555 8555 6555 9555',
      cvvCode: '465',
      expiryDate: '2025-08-28',
    });
  });
});
