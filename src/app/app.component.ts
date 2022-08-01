import { Component } from '@angular/core';
import { UploadServiceService } from './FileUpload/service/upload-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  title = 'FileUpload';
  file!:File;
  static file: any;
  constructor(private UploadServiceService: UploadServiceService) {}
    onFilechange(event:any) {
    this.file = event.target.files[0]
    }
    upload() {
      if (this.file) {
        this.UploadServiceService.uploadfile(this.file).subscribe((resp:any) => {
          alert("Uploaded")
        })
      } else {
        alert("Please select a file first")
      }
    }
}
