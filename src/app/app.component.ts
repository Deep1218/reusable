import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  data:any;
  datepicker = new FormGroup({
		Date: new FormControl(undefined, [Validators.required])
	});
  submit(){
    this.data =this.datepicker.value;
    console.log(this.data);
    
    
  }

}
