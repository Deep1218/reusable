import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsService } from './service/forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  cardForm!: FormGroup;
  formData: any;

  constructor(private formService: FormsService) {
    this.cardForm = this.formService.createCardForm();
  }

  onSubmit() {
    console.log(this.cardForm.value);
    this.formData = this.cardForm.value;
  }
}
