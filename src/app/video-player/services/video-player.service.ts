import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { srcData } from '../models/srcData';

@Injectable({
  providedIn: 'root',
})
export class VideoPlayerService {
  src: BehaviorSubject<srcData> = new BehaviorSubject({} as srcData);
  constructor() {}

  load(file: string | File) {
    console.log('file not not', file);
    if (typeof file === 'string') {
      this.src.next({
        type: 'path',
        src: file,
      });
    } else {
      this.src.next({
        type: 'blob',
        src: file,
      });
    }
  }
}
