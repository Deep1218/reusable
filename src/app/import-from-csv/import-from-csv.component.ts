import { Component, Input, OnInit } from '@angular/core';
import { read, utils } from 'xlsx';
import { ImportFromCsvService } from './service/import-from-csv.service';

@Component({
  selector: 'app-import-from-csv',
  templateUrl: './import-from-csv.component.html',
  styleUrls: ['./import-from-csv.component.css'],
})
export class ImportFromCsvComponent implements OnInit {

  @Input('importedDataEvent') importedDataEvent:any
  propertyNames: any[] = [];
  importedData: any
  isUpdating: boolean = false;

  constructor(private importFromCsvSevice :ImportFromCsvService) {}

  ngOnInit(): void {
    this.handleImport(this.importedDataEvent)
  }

  handleImport(event: any) {
    const files = event.target.files;
    if (files.length) {
      const file = files[0];
      // it will only accepts csv/xlsx/xls files
      const type =
        file.name.endsWith('.csv') ||
        file.name.endsWith('.xlsx') ||
        file.name.endsWith('.xls');
      if (type) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          const wb = read(event.target.result);
          const sheets = wb.SheetNames;
          if (sheets.length) {
            const rows = utils.sheet_to_csv(wb.Sheets[sheets[0]]);
            this.importedData = this.importDataFromCSV(rows);
            this.importFromCsvSevice.importedData.next(this.importedData)
          }
        };
        reader.readAsArrayBuffer(file);
      } 
      // if type will be different then else block will be called
      else {
        this.importFromCsvSevice.importedData.next(null)
        alert('You can only import from xlsx/csv/xls');
      }
    }
  }

  onSave(i: any) {
    this.importedData[i].edit = false;
    this.importFromCsvSevice.importedData.next(this.importedData)
  }

  onEdit(i: any) {
    this.importedData[i].edit = true;
    this.importedData
      .filter((data: any, index: number) => i !== index)
      .forEach((data: any) => {
        data.edit = false;
      });
  }

  importDataFromCSV(csvText: string): Array<any> {
    this.propertyNames = csvText.slice(0, csvText.indexOf('\n')).split(',');
    const dataRows = csvText.slice(csvText.indexOf('\n') + 1).split('\n');
    let dataArray: any[] = [];
    dataRows.forEach((row) => {
      let values = row.split(',');

      let obj: any = new Object();

      for (let index = 0; index < this.propertyNames.length; index++) {
        const propertyName: string = this.propertyNames[index];
        let val: any = values[index];
        if (val === '') {
          val = null;
        }
        obj[propertyName] = val;
        obj.edit = false;
      }
      dataArray.push(obj);
    });
    return dataArray;
  }
}
