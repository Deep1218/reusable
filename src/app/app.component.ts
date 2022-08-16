import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'reusable';
  user!: SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;
  FacebookLoginProvider = FacebookLoginProvider;

  constructor(private authService: SocialAuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }

  signInFb() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
