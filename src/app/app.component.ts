import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.Japan, CountryISO.Russia,CountryISO.UnitedArabEmirates	];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});
  submit(){
    console.log(this.phoneForm.value)
  }
}


