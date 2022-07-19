import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}

  public uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    console.log('from Service', formData);
  }
}
