# OTP UI

This project is about OTP UI

## Project Prerequisite

1. Angular CLI v13.0.0
2. Node.js v16.16.0
3. Project uses [ngx-bootstrap](https://www.npmjs.com/package/ngx-bootstrap) v8.0.0, To add ngx-bootstrap : <br /> `ng add ngx-bootstrap@8.0.0`

## Adding Component to your project

1. Copy OTP module [folder](https://github.com/Deep1218/reusable/tree/otp-ui/src/app) to your project
2. Add OtpModule to your module
3. Use OtpService in your compoent
4. See [documentation](https://github.com/Deep1218/reusable/tree/otp-ui#documentation) for more details

## Running Development server

1. `npm i` in root directory
2. `ng serve` for dev server (`http://localhost:4200/`)

## Running unit tests

1. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Documentation

See [appComponent](https://github.com/Deep1218/reusable/blob/otp-ui/src/app/app.component.ts) for example.

### OtpService.show({params})

&nbsp;&nbsp;Display OTP form compoent to UI with given params.
| Params | Type | Default | Description |
| ----------- | ------ | ------------------------------------------- | ------------------------------------------------------------------------- |
| formTitle | string | OTP Verification | Display title of the form. |
| formMessage | string | Please enter the OTP that we have sent you. | Display message in small font. for ex. (we have sent mail to xyz@abc.com) |
| otpLength | number | 4 | Length Of OTP |

### OtpService.hide()

&nbsp;&nbsp; To manually hide OTP component from UI, no params reqired.

### OtpService.onVerify

&nbsp;&nbsp; You can subscribe to this Observable. <br />
&nbsp;&nbsp; It will be called when user press verify button with OTP as a value. <br />
&nbsp;&nbsp; Example:
&nbsp;&nbsp;

```
this.otpService.onVerify.subscribe((otp) => {
  console.log(otp);
});
```
