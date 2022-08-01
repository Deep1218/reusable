import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private httpClient: HttpClient) {}
  public uploadImage(image: File) {
    const formData = new FormData();
    formData.append('file', image);
    return this.httpClient.post('http://localhost:4000/image/addImage', formData)

  }
}
