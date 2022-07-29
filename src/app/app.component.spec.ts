import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OtpModule } from './otp/module/otp.module';
import { OtpService } from './otp/services/otp.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it("show otp form using component's show method", fakeAsync(() => {
    let otpContainer =
      fixture.nativeElement.ownerDocument.querySelectorAll(
        '.otpContainer'
      ).length;
    expect(otpContainer).toBe(0);

    component.show();
    fixture.detectChanges();
    otpContainer =
      fixture.nativeElement.ownerDocument.querySelectorAll(
        '.otpContainer'
      ).length;

    expect(otpContainer).toBe(1);
  }));

  it('show otp form using service with default params and hide it', () => {
    let otpService = TestBed.inject(OtpService);

    let otpContainer =
      fixture.nativeElement.ownerDocument.querySelectorAll(
        '.otpContainer'
      ).length;
    expect(otpContainer).toBe(0);

    otpService.show({});
    otpService.show({});
    otpContainer =
      fixture.nativeElement.ownerDocument.querySelectorAll(
        '.otpContainer'
      ).length;

    expect(otpContainer).toBe(1);

    otpService.hide();
    otpContainer =
      fixture.nativeElement.ownerDocument.querySelectorAll(
        '.otpContainer'
      ).length;
    expect(otpContainer).toBe(0);
  });

  it('show otp form using html template', () => {
    let otpContainer =
      fixture.nativeElement.ownerDocument.querySelectorAll(
        '.otpContainer'
      ).length;
    expect(otpContainer).toBe(0);
    component.showUsingTemplate();
    fixture.detectChanges();
    otpContainer =
      fixture.nativeElement.ownerDocument.querySelectorAll(
        '.otpContainer'
      ).length;
    expect(otpContainer).toBe(1);
  });

  // it('input otp and verify', () => {
  //   let verifySpy = spyOn(component, 'verify').and.callThrough();

  //   expect(verifySpy).toHaveBeenCalledTimes(1);
  // });
});
