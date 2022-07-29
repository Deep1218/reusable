import { Component} from '@angular/core';
import { ExportService } from '../service/export.service';

@Component({
  selector: 'app-export-to-csv',
  templateUrl: './export-to-csv.component.html',
  styleUrls: ['./export-to-csv.component.css'],
})

export class ExportToCsvComponent{

  constructor(private exportService:ExportService) {}

  propertyNames: any = ['id', 'firstName', 'lastName', 'email'];
  data: any[] = [
    {
      id: 1,
      firstName: 'abc',
      lastName: null,
      email: 'abc@gmail.com',
    },
    {
      id: 2,
      firstName: 'abc',
      lastName: 'xyz',
      email: 'abc@gmail.com',
    },
    {
      id: 3,
      firstName: null,
      lastName: 'xyz',
      email: 'abc@gmail.com',
    },
    {
      id: 4,
      firstName: 'abc',
      lastName: 'xyz',
      email: 'abc@gmail.com',
    },
    {
      id: 5,
      firstName: 'abc',
      lastName: 'xyz',
      email: 'abc@gmail.com',
    },
    {
      id: 6,
      firstName: 'abc',
      lastName: 'xyz',
      email: 'abc@gmail.com',
    },
  ];

  exportToExcel(jsonData: any[], fileName: string) {
    this.exportService.exportToExcel(jsonData,fileName)
  }
  
  exportToCsv(jsonData: any[], fileName:string) {
   this.exportService.exportToCsv(jsonData, fileName)
  }
}
