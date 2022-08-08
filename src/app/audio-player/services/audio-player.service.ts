import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SrcData } from '../models/srcData';

@Injectable({
  providedIn: 'root',
})
export class AudioPlayerService {
  src: BehaviorSubject<SrcData> = new BehaviorSubject({} as SrcData);
  /**
   * @name Load
   * @description Load audio using URL or file.
   * @param {string|File} file url or local file
   * @param {string} title title/name of the audio, For local file default title is filename
   *
   * @returns {void} void
   */
  load(file: string | File, title: string = '') {
    console.log(file);
    if (typeof file === 'string') {
      this.src.next({
        type: 'path',
        src: file,
        title: title || 'Song Name',
      });
    } else {
      this.src.next({
        type: 'blob',
        src: file,
        title: title || file.name,
      });
    }
  }
}
