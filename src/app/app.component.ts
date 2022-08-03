import { Component } from '@angular/core';
import { ImageService } from './service/image.service';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedFile!: ImageSnippet;
  file: File | undefined;
  constructor(private imageService: ImageService) {}

  title = 'reusable';
  response: any;
  

  processFile(imageInput: any) {
    const reader = new FileReader();
    const fileList: FileList = imageInput.files as FileList;   
    console.log(fileList);
    const file: File = fileList[0];
    // console.log(file);
    
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    })
    reader.readAsDataURL(file);
  }
  onUpload() {
    if(this.selectedFile.file){
      this.imageService.uploadImage(this.selectedFile.file).subscribe((resp:any) => {
        this.response = resp
        alert("Uploaded") 
      })
    } 
    else
    {
      alert("Please select a Image first")
    }
}
}