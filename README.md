# Social Login

![Logo](https://www.solutionanalysts.com/wp-content/uploads/2021/02/SA-Logo-high.png)

## Description

This is the project which is developed under the Angular 13.0.0 framework to make the development of the social login (Google and Facebook) easier and fast for other developers with the help of `@abacritt/angularx-social-login` [package](https://www.npmjs.com/package/@abacritt/angularx-social-login).

## Configuration

For Google Client ID and API Secret:-

[Google developer console](https://console.cloud.google.com/apis/dashboard?project=social-login-358910) will provide client Id and API key which you will required in futher process. If you face any problem you can refer following link [Get Google Client ID and Secret](https://www.positronx.io/angular-google-social-login-tutorial-with-example/).

For Facebook APP ID and APP Secret:-

[Meta for developer](https://developers.facebook.com/apps/create/) will provide app Id and app secret which you will required in futher process. If you face any problem you can refer following link [Get Facebook App ID and Secret](https://help.vtex.com/tutorial/adding-a-client-id-and-a-client-secret-to-log-in-with-facebook--3R7rzXWG1GswWOIkYyy8SO).

Import the following codes in the respected modules in to add social login feature.

## How To Use:-

1. `src/app/app.module.ts`:-

```
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SocialLoginModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'YOUR_CLIENT_ID'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('YOUR_APP_ID'),
          },
        ],
        onError: (err: any) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

2. `src/app/app.component.html`

- For Google Sign In button:-

```
<asl-google-signin-button type="standard" size="medium"></asl-google-signin-button>
```

This code will automatically call the Google signIn method which will open popup google sign in screen.

- For Facebook Sign In button:-

```
<button (click)="signInFb()">
    Login with Facebook
</button>
```

3. `src/app/app.component.ts`

```
ngOnInit() {
   this.authService.authState.subscribe((user) => {
     this.user = user;
     console.log(this.user);
   });
}
```

This will console the login details after signIn method called successfully.

- For Facebook:-

```
signInFb() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
}
```
