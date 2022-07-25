import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import  * as XLSX from 'xlsx'
@Component({
  selector: 'app-export-to-csv',
  templateUrl: './export-to-csv.component.html',
  styleUrls: ['./export-to-csv.component.css']
})
export class ExportToCsvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.csv';

  propertyNames:any = ['id','firstName', 'lastName', 'email']
  data:any[] = [
    {
      id:1,
      firstName:"abc",
      lastName:null,
      email:"abc@gmail.com"
    },
    {
      id:2,
      firstName:"abc",
      lastName:"xyz",
      email:"abc@gmail.com"
    },
    {
      id:3,
      firstName:null,
      lastName:"xyz",
      email:"abc@gmail.com"
    },
    {
      id:4,
      firstName:"abc",
      lastName:"xyz",
      email:"abc@gmail.com"
    },
    {
      id:5,
      firstName:"abc",
      lastName:"xyz",
      email:"abc@gmail.com"
    },
    {
      id:6,
      firstName:"abc",
      lastName:"xyz",
      email:"abc@gmail.com"
    },
  ]

  exportToExcel(){
    // let jsonData:any = JSON.stringify(this.data)
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data)
    const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, 'Reports');
  }

  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: this.fileType});
    FileSaver.saveAs(data, fileName + this.fileExtension);
  }
  
}
