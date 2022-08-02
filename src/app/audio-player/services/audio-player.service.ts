import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SrcData } from '../models/srcData';

@Injectable({
  providedIn: 'root',
})
export class AudioPlayerService {
  src: BehaviorSubject<SrcData> = new BehaviorSubject({} as SrcData);
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
