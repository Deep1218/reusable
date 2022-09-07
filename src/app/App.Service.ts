import { Injectable } from '@angular/core';
import { Country, State, City }  from 'country-state-city';

@Injectable()
export class AppService {
  private countryData = Country;
  private stateData = State;
  private cityData = City;

  getCountries() { 
    return this.countryData.getAllCountries();
  }

  getStatesByCountry(countryShotName: string) {
    return this.stateData.getStatesOfCountry(countryShotName);
  }

  getCitiesByState(country: string, state: string) {
    return this.cityData.getCitiesOfState(country, state);
  }
}