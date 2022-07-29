import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImportFromCsvService {
  importedData:any = new BehaviorSubject(null)
}
