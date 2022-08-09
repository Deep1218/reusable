import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { UploadService } from './Service/upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

}) 

export class AppComponent {
  title = 'FileUpload';
  url:any;
  format:any;
  selectedFiles:any;
  progressInfos:any = []; 
  message = '';
  fileInfos: Observable<any> | undefined;
  file: any;

  constructor(private UploadService:UploadService) { 
  }

 onSelectFile(event:any) {
    this.file = event.target.files[0]
    }


  upload() {
    if (this.file) {
   
      this.progressInfos[0] = { value: 0,filename:this.file.name };
      this.UploadService.uploadfile(this.file).subscribe(
        (event:any)  =>{ 
             if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[0].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          alert("uploaded")
          // this.fileInfos = this.UploadService.getFiles();
        }
  
        },
        err => { 
          this.progressInfos[0].value = 0;
          this.message = 'Could not upload the file:' + this.file.name;
        });
    } else {
      alert("Please select a file first")
    }
    
}

selectFiles(event:any) {
  this.progressInfos = [];
  this.selectedFiles = event.target.files;
}
}