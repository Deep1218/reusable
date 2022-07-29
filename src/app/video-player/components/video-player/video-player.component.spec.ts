import { DebugElement } from '@angular/core';
import {
  async,
  ComponentFixture,
  discardPeriodicTasks,
  fakeAsync,
  flush,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { SecondConverterPipe } from '../../pipes/second-converter.pipe';
import { VideoPlayerService } from '../../services/video-player.service';

import { VideoPlayerComponent } from './video-player.component';

export function click(
  el: DebugElement | HTMLElement,
  eventObj: any = { button: 0 }
): void {
  // { button:2 } for right button
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}

const waitSec = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(null);
  }, 1000);
});

describe('VideoPlayerComponent', () => {
  let component: VideoPlayerComponent;
  let fixture: ComponentFixture<VideoPlayerComponent>;
  let videoPlayerService: VideoPlayerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoPlayerComponent, SecondConverterPipe],
      providers: [VideoPlayerService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO
  // it('toogle play pause', async(() => {
  //   let videoElement = fixture.nativeElement.querySelector('video');
  //   videoPlayerService = TestBed.inject(VideoPlayerService);
  //   videoPlayerService.src.next({
  //     type: 'path',
  //     src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
  //   });
  //   fixture.detectChanges();
  //   expect(videoElement.src).toBe(
  //     'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
  //   );

  //   console.log('before stable', Date.now());
  //   fixture.whenStable().then(() => {
  //     fixture.detectChanges();
  //     console.log('in stable', Date.now());
  //     console.log(videoElement.duration, 'in stable ');
  //   });
  //   console.log('after stable', Date.now());

  //   fixture.detectChanges();
  //   console.log(videoElement.duration, 'lasst ');
  //   expect(1).toBe(1);

  //   // expect(videoElement.paused).toBe(true);

  //   // let playPauseBtn = fixture.nativeElement.querySelector('.play-pause');
  //   // // playPauseBtn.click();
  //   // tick(500);
  //   // fixture.detectChanges();
  //   // tick(500);
  //   // expect(!videoElement.paused).toBe(false);
  //   // discardPeriodicTasks();
  //   // // flush();
  // }));

  it('change speed of video', () => {
    let videoElement = fixture.nativeElement.querySelector('video');
    expect(videoElement.playbackRate).toBe(1);
    component.setPlaybackRate(2);
    expect(videoElement.playbackRate).toBe(2);
  });

  it('skip video 10 second using keyboard event', () => {
    let videoElement = fixture.nativeElement.querySelector('video');
    expect(videoElement.currentTime).toBe(0);
    component.handelKeyEvent({ code: 'ArrowRight' } as KeyboardEvent);
    expect(videoElement.currentTime).toBe(10);
    component.handelKeyEvent({ code: 'KeyL' } as KeyboardEvent);
    expect(videoElement.currentTime).toBe(20);
    component.handelKeyEvent({ code: 'KeyJ' } as KeyboardEvent);
    expect(videoElement.currentTime).toBe(10);
  });

  // it('skip to specific position', fakeAsync(() => {
  //   videoPlayerService = TestBed.inject(VideoPlayerService);
  //   videoPlayerService.src.next({
  //     type: 'path',
  //     src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
  //   });
  //   tick(1000);
  //   let videoElement = fixture.nativeElement.querySelector('video');
  //   expect(videoElement.src).toBe(
  //     'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
  //   );
  //   fixture.detectChanges();

  //   tick(3000);
  //   fixture.detectChanges();
  //   console.log(videoElement.duration, 'fffffff');
  //   component.setDuration();
  //   fixture.detectChanges();
  //   expect(videoElement.currentTime).toBe(0);
  //   component.seekTo({ target: { value: 10 } });
  //   fixture.detectChanges();
  //   let seekAmount = 0.1 * component.totalDuration;
  //   expect(videoElement.currentTime).toBe(seekAmount);
  // }));

  it('change volume of video', () => {
    let videoElement = fixture.nativeElement.querySelector('video');
    expect(videoElement.volume).toBe(1);
    component.setVolume({ target: { value: 8 } });
    expect(videoElement.volume).toBe(0.8);
  });

  it('toogle controls', fakeAsync(() => {
    let videoCtrl = fixture.nativeElement.querySelector('.video');
    expect(videoCtrl.classList.contains('showControls')).toBe(false);

    component.showControls();
    fixture.detectChanges();
    expect(videoCtrl.classList.contains('showControls')).toBe(true);

    component.showControls();
    fixture.detectChanges();
    expect(videoCtrl.classList.contains('showControls')).toBe(true);

    tick(2000);
    component.hideControls();
    fixture.detectChanges();
    expect(videoCtrl.classList.contains('showControls')).toBe(false);
  }));

  it('show animation', fakeAsync(() => {
    let seekRightSVG = fixture.nativeElement.querySelector('.right-seek svg');
    expect(seekRightSVG.classList.contains('showAnimation')).toBe(false);
    component.showAnimation('seekRight');
    fixture.detectChanges();
    expect(seekRightSVG.classList.contains('showAnimation')).toBe(true);
    tick(501);
    expect(seekRightSVG.classList.contains('showAnimation')).toBe(false);

    let seekLeftSVG = fixture.nativeElement.querySelector('.left-seek svg');
    expect(seekLeftSVG.classList.contains('showAnimation')).toBe(false);
    component.showAnimation('seekLeft');
    fixture.detectChanges();
    expect(seekLeftSVG.classList.contains('showAnimation')).toBe(true);
    tick(501);
    expect(seekLeftSVG.classList.contains('showAnimation')).toBe(false);

    let playSVG = fixture.nativeElement.querySelector(
      '.middle-play-pause svg:first-child'
    );
    expect(playSVG.classList.contains('showAnimation')).toBe(false);
    component.showAnimation('play');
    fixture.detectChanges();
    expect(playSVG.classList.contains('showAnimation')).toBe(true);
    tick(501);
    expect(playSVG.classList.contains('showAnimation')).toBe(false);

    let pauseSVG = fixture.nativeElement.querySelector(
      '.middle-play-pause svg:last-child'
    );
    expect(pauseSVG.classList.contains('showAnimation')).toBe(false);
    component.showAnimation('pause');
    fixture.detectChanges();
    expect(pauseSVG.classList.contains('showAnimation')).toBe(true);
    tick(501);
    expect(pauseSVG.classList.contains('showAnimation')).toBe(false);

    flush();
  }));

  it('toogle loader', () => {
    expect(component.isLoading).toBe(false);
    component.showLoader();
    expect(component.isLoading).toBe(true);
    component.hideLoader();
    expect(component.isLoading).toBe(false);
  });

  it('toogle fullscreen', fakeAsync(() => {
    let fullScrElement = fixture.nativeElement.querySelector('.screen-control');
    expect(fullScrElement.ownerDocument.fullscreenElement).toBe(null);
    fullScrElement.click();
    tick(500);
    fixture.detectChanges();
    tick(500);

    fullScrElement.click();
    tick(500);
    fixture.detectChanges();
    tick(500);

    expect(fullScrElement.ownerDocument.fullscreenElement).toBe(null);
  }));
});
