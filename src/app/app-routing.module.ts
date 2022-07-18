import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpPageComponent } from './components/otp-page/otp-page.component';

const routes: Routes = [
  {
    path: 'verify-otp/:token',
    component: OtpPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
