import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
} from '@angular/core';
import { Subject } from 'rxjs';
import { Otp } from '../components/otp/otp.component';

interface Config {
  formTitle: string;
  formMessage: string;
  otpLength: number;
}

@Injectable({
  providedIn: 'root',
})
export class OtpService {
  private componentRef!: ComponentRef<Otp>;
  private config: Subject<Config> = new Subject();

  onVerify = new Subject<number>();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) {}

  hide() {
    this.applicationRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }

  show({
    formTitle = 'OTP Verification',
    formMessage = 'Please enter the OTP that we have sent you.',
    otpLength = 4,
  }) {
    this.config.next({ formTitle, formMessage, otpLength });
    console.log(formTitle);
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(Otp)
      .create(this.injector);

    // inputs to otp component
    this.componentRef.instance.formTitle = formTitle;
    this.componentRef.instance.formMessage = formMessage;
    this.componentRef.instance.otpLength = otpLength;

    // output from component
    this.componentRef.instance.onVerify.subscribe((otp) => {
      this.onVerify.next(otp);
    });
    this.applicationRef.attachView(this.componentRef.hostView);
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }
}
