import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { SrcData } from '../../models/srcData';
import { AudioPlayerService } from '../../services/audio-player.service';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
})
export class AudioPlayerComponent implements AfterViewInit {
  @ViewChild('audio') audioElement!: ElementRef;

  @Input('src') audioSource =
    'https://filesamples.com/samples/audio/mp3/sample2.mp3';
  constructor(private audioService: AudioPlayerService) {}

  isPlaying = false;
  currentProgress = 0;
  currentTime = 0;
  totalTime = 0;

  ngAfterViewInit() {
    this.audioService.src.subscribe((data: SrcData) => {
      if (!data?.type || !data.src) return;
      if (data.type == 'path') {
        this.audioElement.nativeElement.src = data.src as string;
      } else {
        this.audioElement.nativeElement.src = window.URL.createObjectURL(
          data.src as File
        );
      }
    });
    // when src is given by property binding
    this.audioService.src.next({
      type: 'path',
      src: this.audioSource,
    });
  }
  setDuration() {
    this.totalTime = this.audioElement.nativeElement.duration;
  }

  seekTo(event: any) {
    // let seekToTime =
    let perc = event.target.value;
    this.currentTime = Math.round((perc * this.totalTime) / 100);
    console.log(this.currentTime, 'innn');
    this.audioElement.nativeElement.currentTime = this.currentTime;
  }
  tooglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  updateTimer: any;
  play() {
    if (this.updateTimer) {
      clearInterval(this.updateTimer);
      this.updateTimer = null;
    }
    this.updateTimer = setInterval(() => {
      this.currentTime = Math.round(
        this.audioElement.nativeElement.currentTime
      );
      this.currentProgress = (this.currentTime / this.totalTime) * 100;
    }, Math.min(1000, this.totalTime * 10));
    this.isPlaying = true;
    this.audioElement.nativeElement.play();
  }
  pause() {
    this.isPlaying = false;
    this.audioElement.nativeElement.pause();
  }
  onEnded() {
    clearInterval(this.updateTimer);
    this.updateTimer = null;
    this.isPlaying = false;
  }
}
