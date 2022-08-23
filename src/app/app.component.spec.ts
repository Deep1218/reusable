import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture :ComponentFixture<AppComponent>;
    let app :AppComponent;
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports: [
    
        FormsModule,
		    ReactiveFormsModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  })


  it('should create the app', () => {
    
    expect(app).toBeTruthy();
  });
  it('should submit',()=>{
    app.phoneForm.setValue({phone: {countryCode: "IN",
    dialCode: "+91",
    e164Number: "+917896541230",
    internationalNumber: "+91 78965 41230",
    nationalNumber: "078965 41230",
    number: "078965 41230"}})
    app.submit();
    expect(app.data).toEqual({phone: {countryCode: "IN",
    dialCode: "+91",
    e164Number: "+917896541230",
    internationalNumber: "+91 78965 41230",
    nationalNumber: "078965 41230",
    number: "078965 41230"}})
  })



});
