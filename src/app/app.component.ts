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
  progressInfos = []; 
  message = '';
  fileInfos: Observable<any> | undefined;

  constructor(private UploadService:UploadService) { }

  onSelectFile(event:any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }
  upload(  idx:any, file:any) {
    this.progressInfos[idx] = { value: 0,filename,file.name };
    this.UploadService.upload(file).subscribe(
      event  =>{  if (event.type === HttpEventType.UploadProgress) {
        this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.fileInfos = this.UploadService.getFiles();
      }

      },
      err => {
        this.progressInfos[idx].value = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
    

  }
  selectFiles(event:any) {
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }
  

}
