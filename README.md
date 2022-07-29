# Import From csv/xlsx/xls File

This project is about Importing Data from the csv/xlsx/xls Files 

## Project Prerequisite

1. Angular CLI v13.0.0
2. Node.js v16.16.0
3. Project uses  
    1. [ngx-bootstrap](https://www.npmjs.com/package/ngx-bootstrap) v8.0.0, To add ngx-bootstrap : <br /> `ng add ngx-bootstrap@8.0.0`
    2. [xlsx](https://www.npmjs.com/package/xlsx) v0.18.5, To add xlsx : <br /> `npm install xlsx`

## Adding Component to your project

1. Copy import-from-csv [folder](https://github.com/Deep1218/reusable/tree/importFromCsv/src/app) to your project
2. Add `ImportFromCsvComponent` to your module
3. Use `ImportFromCsvService` in your component
4. See [documentation](https://github.com/Deep1218/reusable/tree/otp-ui#documentation) for more details

## Running Development server

1. `npm i` in root directory
2. `ng serve` for dev server (`http://localhost:4200/`)

## Running unit tests

1. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Documentation

See [appComponent](https://github.com/Deep1218/reusable/blob/importFromCsv/src/app/app.component.ts) for example.

### In ts file of your Component
&nbsp;&nbsp; Copy this Code.. 
```
// Variables

    importedDataEvent:any
    importedData:any[] = []

// Functions

    handleImportedData(event:any){
      this.importedDataEvent = null
      setTimeout(() => {
       this.importedDataEvent = event
      }, 100);
    }
  
    onUpload(){
      this.importedData = this.importFromCsvService.importedData.value
      if(this.importedData){
        console.log(this.importedData);
        // call your api here to pass the data in the backend
        alert("Data Uploaded Successfully!!")
    }
  }
```
&nbsp;&nbsp; Final JSON data will be stored in `importedData` variable


### In HTML file of your Component

&nbsp;&nbsp; Copy this Code.. 
```
<input type="file" id="importfromcsv" accept=".xlsx,.csv,.xls" (change)="handleImportedData($event)">
<div *ngIf="importedDataEvent">
<app-import-from-csv [importedDataEvent]="importedDataEvent"></app-import-from-csv>
</div>
<button *ngIf="importedDataEvent" class="btn btn-success" id="upload" (click)="onUpload()">Upload</button>
```
&nbsp;&nbsp; Here, on Input tag if you choose a File from your local system then `handleImportedData($event)` function will be called and then the `<app-import-from-csv>` component will be called.<br />
And on clicking on upload button `onUpload()` function will be called and there you call your api there to pass the data in the backend.
