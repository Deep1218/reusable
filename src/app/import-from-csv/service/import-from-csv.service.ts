import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImportFromCsvService {

  constructor() { }
  
  importedData:any = new BehaviorSubject(null)
}
