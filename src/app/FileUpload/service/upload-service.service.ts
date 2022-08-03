import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  constructor(private httpClient: HttpClient) { }
  public uploadfile(file: File) {
      let formParams = new FormData();
      formParams.append('myFile', file)
      return this.httpClient.post('http://localhost:3000/file/uploadFile', formParams)
    }
  }

  