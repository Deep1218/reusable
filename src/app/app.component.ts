import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AudioPlayerService } from './audio-player/services/audio-player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private audioService: AudioPlayerService) {}
  urlForm = new FormGroup({
    url: new FormControl('', [Validators.required]),
  });

  onFileSelect(e: any) {
    let file = e.target.files[0];
    if (!file || !file.type.startsWith('audio')) {
      console.log('invalid file');
      return false;
    }
    this.audioService.load(file);
    return true;
  }

  loadUrl() {
    this.audioService.load(this.urlForm.value.url, 'Your Audio File Name');
  }
}
