import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  data:any;
separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.Japan, CountryISO.Russia,CountryISO.UnitedArabEmirates	];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});
  submit(){
    this.data =this.phoneForm.value;


  }
}


