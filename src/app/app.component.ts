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
  constructor(private imageService: ImageService) {}

  title = 'reusable';
  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    console.log('Working', imageInput.files[0]);

    const reader = new FileReader();
    const file: File = imageInput.files[0];
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.imageService.uploadImage(this.selectedFile.file);
    });
    reader.readAsDataURL(file);
  }
  onUpload() {}
}
