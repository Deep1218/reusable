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
  

  processFile(imageInput: any) {
    // console.log('Working', imageInput.files[0]);

    const reader = new FileReader();
    const file: File = imageInput.files[0];
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    })
    reader.readAsDataURL(file);
  }
  onUpload() {
    if(this.selectedFile.file)
    this.imageService.uploadImage(this.selectedFile.file).subscribe((resp:any) => {
      alert("Uploaded")
    })
  else{
    alert("Please select a Image first")
  }
}
}