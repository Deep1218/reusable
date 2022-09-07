import { Component ,OnInit} from '@angular/core';
import { ICountry, IState, ICity } from 'country-state-city'
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AppService } from './App.Service';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

interface Country {
  shortName: string;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  matcher = new MyErrorStateMatcher();

  countries: ICountry[];
  states: IState[] | undefined;
  cities: ICity[] | undefined;

  country = new FormControl(null, [Validators.required]);
  state = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);
  city = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);

  constructor(private service: AppService) {
    this.countries = this.service.getCountries();
    this.form = new FormGroup({
      country: this.country,
      state: this.state,
      city: this.city,
    });
  }

  ngOnInit() {
    this.country.valueChanges.subscribe((country) => {
      console.log('kjfdlf',country);
      
      this.state.reset();
      this.state.disable();
      if (country) {
        console.log('bfr',this.states)

        this.states = this.service. getStatesByCountry(country);
        console.log('after',this.states)
        this.state.enable();
      }
    });

    this.state.valueChanges.subscribe((state) => {
      this.city.reset();
      this.city.disable();
      if (state) {
        this.cities = this.service.getCitiesByState(this.country.value, state);
        this.city.enable();
      }
    });
  }
}
