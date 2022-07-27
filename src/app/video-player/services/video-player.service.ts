import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { srcData } from '../models/srcData';

@Injectable({
  providedIn: 'root',
})
export class VideoPlayerService {
  src: Subject<srcData> = new Subject();
  constructor() {}

  load(file: string | File) {
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
