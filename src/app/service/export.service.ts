import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  exportToExcel(jsonData: any[], fileName: string) {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const wb: XLSX.WorkBook = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, {
      bookType: 'xlsx',
      type: 'array',
    });
    const data: Blob = new Blob([excelBuffer], { type: fileType });
    let url:string = window.URL.createObjectURL(data);
    let a:HTMLAnchorElement = document.createElement('a')
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = fileName + fileExtension;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
  }
  
  exportToCsv(jsonData: any[], fileName:string) {
    const fileType = 'text/csv;charset=utf-8';
    const fileExtension = '.csv';
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const csvOutput: string = XLSX.utils.sheet_to_csv(worksheet);
    const data: Blob = new Blob([csvOutput], { type: fileType });
    let url:string = window.URL.createObjectURL(data);
    let a:HTMLAnchorElement = document.createElement('a')
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = fileName + fileExtension;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
  }
 }

