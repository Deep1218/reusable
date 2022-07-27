import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { srcData } from '../../models/srcData';
import { VideoPlayerService } from '../../services/video-player.service';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements AfterViewInit {
  @ViewChild('video') videoElement!: ElementRef;
  @ViewChild('videoWithControls') videoWithControls!: ElementRef;

  @ViewChild('middlePlay') playSVG!: ElementRef;
  @ViewChild('middlePause') pauseSVG!: ElementRef;
  @ViewChild('leftSeek') leftSeekSVG!: ElementRef;
  @ViewChild('rightSeek') rightSeekSVG!: ElementRef;

  @Input('src') videoSource!: string;

  isPlaying = new BehaviorSubject(false);
  currentPlaybackRate = 1;
  currentProgress = 0;
  currentVolume = 0.7;
  currentDuration = 0;

  totalDuration = 0;

  progressInterval!: any;

  constructor(private videoService: VideoPlayerService) {}

  ngAfterViewInit(): void {
    this.videoService.src.subscribe((data: srcData) => {
      if (data.type == 'path') {
        this.videoElement.nativeElement.src = data.src as string;
      } else {
        this.videoElement.nativeElement.src = window.URL.createObjectURL(
          data.src as File
        );
      }
      this.currentProgress = 0;
    });

    // when src is given by property binding
    this.videoService.src.next({
      type: 'path',
      src: this.videoSource,
    });

    //when video fullly played
    this.videoElement.nativeElement.onended = () => {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
      this.isPlaying.next(false);
    };
  }

  setDuration() {
    console.log('in dur', this.videoElement.nativeElement.duration);
    this.totalDuration = this.videoElement.nativeElement.duration;
  }

  play() {
    // interval will run every 100th of part of full duration or 1 sec
    this.progressInterval = setInterval(() => {
      this.updateProgress();
    }, Math.min(this.totalDuration * 10, 1000));

    this.isPlaying.next(true);
    console.log('intervl', this.isPlaying);
    this.videoElement.nativeElement.play();
  }
  updateProgress() {
    this.currentDuration = Math.round(
      this.videoElement.nativeElement.currentTime
    );
    this.currentProgress =
      (this.videoElement.nativeElement.currentTime * 100) / this.totalDuration;
  }

  pause() {
    clearInterval(this.progressInterval);
    this.progressInterval = null;
    this.isPlaying.next(false);
    this.videoElement.nativeElement.pause();
  }

  tooglePlayPause() {
    console.log(this.isPlaying.value, 'here');
    if (this.isPlaying.value === false) {
      this.showAnimation('play');
      this.play();
    } else {
      this.showAnimation('pause');
      this.pause();
    }
  }

  toogleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    this.videoWithControls.nativeElement.requestFullscreen();
  }

  setPlaybackRate(rate: number) {
    this.videoElement.nativeElement.playbackRate = rate;
    this.currentPlaybackRate = rate;
  }

  handelKeyEvent(e: KeyboardEvent) {
    console.log('here comes key event');
    switch (e.code) {
      case 'KeyL':
      case 'ArrowRight':
        this.seekForward();
        break;
      case 'KeyJ':
      case 'ArrowLeft':
        this.seekBackward();
        break;
      case 'KeyK':
      case 'Space':
        this.tooglePlayPause();
        break;
    }
  }
  seekTo(e: any) {
    let perc = e.target.value;
    console.log('output', (perc / 100) * this.totalDuration);
    console.log('perc is ', perc, this.totalDuration);
    this.videoElement.nativeElement.currentTime =
      (perc / 100) * this.totalDuration;
  }

  seek10Sec(e: any) {
    let totalX = e.target.clientWidth;
    if (e.offsetX > totalX / 2) {
      this.seekForward();
    } else {
      this.seekBackward();
    }
  }
  seekForward() {
    this.showAnimation('seekRight');
    this.videoElement.nativeElement.currentTime =
      this.videoElement.nativeElement.currentTime + 10;
    this.updateProgress();
  }
  seekBackward() {
    this.showAnimation('seekLeft');
    this.videoElement.nativeElement.currentTime =
      this.videoElement.nativeElement.currentTime - 10;
    this.updateProgress();
  }

  controlsTimeout: any;
  showControls() {
    this.videoWithControls.nativeElement.classList.add('showControls');

    if (this.controlsTimeout) {
      clearTimeout(this.controlsTimeout);
      this.controlsTimeout = null;
    }
    this.controlsTimeout = setTimeout(() => {
      this.hideControls();
    }, 1200);
  }
  hideControls() {
    this.videoWithControls.nativeElement.classList.remove('showControls');
  }

  setVolume(e: any) {
    this.currentVolume = parseInt(e.target.value) / 10;
    this.videoElement.nativeElement.volume = this.currentVolume;
  }

  isLoading = false;
  showLoader() {
    this.isLoading = true;
  }
  hideLoader() {
    this.isLoading = false;
  }
  showAnimation(ofWhat: string) {
    console.log(ofWhat);
    switch (ofWhat) {
      case 'play':
        this.playSVG.nativeElement.classList.add('showAnimation');
        setTimeout(() => {
          this.playSVG.nativeElement.classList.remove('showAnimation');
        }, 500);
        break;
      case 'pause':
        this.pauseSVG.nativeElement.classList.add('showAnimation');
        setTimeout(() => {
          this.pauseSVG.nativeElement.classList.remove('showAnimation');
        }, 500);
        break;
      case 'seekLeft':
        this.leftSeekSVG.nativeElement.classList.add('showAnimation');
        setTimeout(() => {
          this.leftSeekSVG.nativeElement.classList.remove('showAnimation');
        }, 500);
        break;
      case 'seekRight':
        this.rightSeekSVG.nativeElement.classList.add('showAnimation');
        setTimeout(() => {
          this.rightSeekSVG.nativeElement.classList.remove('showAnimation');
        }, 500);
        break;
    }
  }
}
