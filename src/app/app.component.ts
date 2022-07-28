import { Component } from '@angular/core';
import { ImportFromCsvService } from './import-from-csv/service/import-from-csv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reusable';
  importedDataEvent:any
  importedData:any[] = []

  constructor(private importFromCsvService:ImportFromCsvService){}

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
}
