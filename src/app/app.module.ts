import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import{MatFormFieldModule}from '@angular/material/form-field';
import {  MatNativeDateModule } from '@angular/material/core';
import{MatDatepickerModule} from '@angular/material/datepicker';
import{MatInputModule} from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateFilterPipe } from './date-filter.pipe';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,DateFilterPipe
  ],
  imports: [
    BrowserModule,

    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,MatInputModule,
    BrowserAnimationsModule


  ],
  
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
