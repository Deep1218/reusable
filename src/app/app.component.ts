import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

}) 

export class AppComponent {
  title = 'FileUpload';
  form!: FormGroup ;
  progress: number = 0;

  constructor(
    public fb: FormBuilder,
  
  ) {
    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })
  }
  uploadFile($event:any){}

  submitUser(){

  }
}
