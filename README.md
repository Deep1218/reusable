# Export To csv/xlsx File

This project is about Exporting Data to csv/xlsx Files 

## Project Prerequisite

1. Angular CLI v13.0.0
2. Node.js v16.16.0
3. Project uses  
    1. [xlsx](https://www.npmjs.com/package/xlsx) v0.18.5, To add xlsx : <br /> `npm install xlsx`
    2. [file-saver](https://www.npmjs.com/package/file-saver) v2.0.5, To add file-saver : <br /> `npm i file-saver`

## Adding Component to your project

1. Copy `Service` [folder](https://github.com/Deep1218/reusable/tree/exportToCsv/src/app/service) to your project
2. Use `ExportService` in your component
3. See [documentation](https://github.com/Deep1218/reusable/tree/exportToCsv#documentation) for more details

## Running Development server

1. `npm i` in root directory
2. `ng serve` for dev server (`http://localhost:4200/`)

## Running unit tests

1. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Documentation

See [export-to-csv Component](https://github.com/Deep1218/reusable/blob/exportToCsv/src/app/export-to-csv) for example.

### In ts file of your Component
&nbsp;&nbsp; Copy this Code.. 
```
// In constructor Call the Service
constructor(private exportService:ExportService) {}

// Functions

 exportToExcel(jsonData: any[], fileName: string) {
    this.exportService.exportToExcel(jsonData,fileName)
  }
  
  exportToCsv(jsonData: any[], fileName:string) {
   this.exportService.exportToCsv(jsonData, fileName)
  }
```
&nbsp;&nbsp; Here, when the Function will called then the service function of that function will be called. And code is in the Service file.

### In HTML file of your Component

&nbsp;&nbsp; Copy this Code.. 
```
<button id="exportToExcel" (click)="exportToExcel(data,'Report')" >export to excel</button>
<button id="exportToCsv" (click)="exportToCsv(data,'Report')" >export to csv</button>

```
&nbsp;&nbsp; Here, onClick on `export to excel` button this `exportToExcel(data,'Report')` function will be called and here @Param1 : `data` is JSON data to be Exported and @Param2 : `Report` is the File Name of the file.
