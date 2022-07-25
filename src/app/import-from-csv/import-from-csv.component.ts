import { Component, OnInit } from '@angular/core';
import { read, utils } from 'xlsx';

@Component({
  selector: 'app-import-from-csv',
  templateUrl: './import-from-csv.component.html',
  styleUrls: ['./import-from-csv.component.css'],
})
export class ImportFromCsvComponent implements OnInit {
  propertyNames: any[] = [];
  importedData: any
  isUpdating: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleImport(event: any) {
    const files = event.target.files;
    if (files.length) {
      const file = files[0];
      // const type = file.name.split('.').at(-1);
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
            // const a = utils.sheet_to_json(wb.Sheets[sheets[0]]);
            // console.log(a);

            this.importedData = this.importDataFromCSV(rows);
          }
        };
        reader.readAsArrayBuffer(file);
      } else {
        alert('You can only import from xlsx/csv/xls');
      }
    }
  }

  // onUpdate(i: any) {
  //   this.isUpdating = true;
  //   console.log(i);
  //   let ele = document.getElementsByClassName(i);
  //   console.log(ele);

  //   console.log(ele[0]);
  //   for (let i = 0; i < ele.length; i++) {
  //     console.log(ele[i]);
  //     var tag = document.createElement('input');
  //     tag.value = ele[i].innerHTML;
  //     ele[i].appendChild(tag);
  //   }

  //   // let ele = document.getElementById(i);
  //   // console.log(ele?.childNodes);
  //   // ele.forEach((e: any) => {
  //   //   console.log(e);

  //   // if (typeof e.innerHTML == 'string') {
  //   //   console.log('hii');
  //   //   var tag = document.createElement('input');
  //   //   tag.value = e.innerHTML;
  //   //   e.appendChild(tag);
  //   // }
  //   // console.log(typeof e.innerHTML);
  //   // });
  // }

  onSave(i: any) {
    console.log(this.importedData);
    this.importedData[i].edit = false;
  }

  onEdit(i: any) {
    console.log(i);
    this.importedData[i].edit = true;
    this.importedData
      .filter((data: any, index: number) => i !== index)
      .forEach((data: any) => {
        data.edit = false;
      });
  }

  onUpload() {
    console.log(this.importedData);
  }

  // onCancel(i: any) {
  //   this.importedData[i].edit = false;
  // }

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

    console.log(dataArray);
    return dataArray;
  }
}
