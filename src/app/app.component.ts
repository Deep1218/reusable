import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VideoPlayerService } from './video-player/services/video-player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  urlForm = new FormGroup({
    url: new FormControl('', [Validators.required]),
  });
  title = 'reusable';
  src =
    'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4';
  constructor(private videoService: VideoPlayerService) {}

  ngOnInit(): void {
    this.videoService.load(this.src);
  }
  selectFile(e: any) {
    let file = e.target.files[0];

    if (!file || !file.type.startsWith('video')) {
      console.log('invalid file');
      return;
    }
    this.videoService.load(file);
  }

  loadUrl() {
    this.videoService.load(this.urlForm.value.url);
  }
}
