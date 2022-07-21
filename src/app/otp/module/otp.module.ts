import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Otp } from '../components/otp/otp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Otp],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild([])],
  exports: [],
})
export class OtpModule {}
