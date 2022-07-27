import { DebugElement } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
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

  // it('when not clicked', () => {
  //   let htmlEl = fixture.debugElement.nativeElement;
  //   expect(htmlEl.querySelector('.test').textContent).toBe('not clicked');
  // });

  // it('when clicked', async () => {
  //   let htmlEl = fixture.debugElement.nativeElement.querySelector('.test');
  //   expect(htmlEl.textContent).toBe('not clicked');
  //   htmlEl.click();
  //   fixture.detectChanges();
  //   expect(htmlEl.textContent).toBe('clicked');
  // });

  it('change speed of video', () => {
    let videoElement =
      fixture.debugElement.nativeElement.querySelector('video');
    expect(videoElement.playbackRate).toBe(1);
    component.setPlaybackRate(2);
    expect(videoElement.playbackRate).toBe(2);
  });

  it('skip video 10 second', async () => {
    let videoElement =
      fixture.debugElement.nativeElement.querySelector('video');
    await waitSec;
    expect(videoElement.currentTime).toBe(0);
    component.handelKeyEvent({ code: 'ArrowRight' } as KeyboardEvent);
    expect(videoElement.currentTime).toBe(10);
    component.handelKeyEvent({ code: 'KeyL' } as KeyboardEvent);
    expect(videoElement.currentTime).toBe(20);
    component.handelKeyEvent({ code: 'KeyJ' } as KeyboardEvent);
    expect(videoElement.currentTime).toBe(10);
  });

  it('skip to specific position', async () => {
    let videoElement =
      fixture.debugElement.nativeElement.querySelector('video');
    (component as any).src =
      'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4';
    console.log(videoElement);

    fixture.detectChanges();
    await waitSec;
    await waitSec;
    await waitSec;
    await waitSec;
    videoElement = fixture.debugElement.nativeElement.querySelector('video');
    fixture.detectChanges();
    console.log(videoElement);
    console.log('in test case ', videoElement.duration);
    component.setDuration();
    expect(videoElement.currentTime).toBe(0);
    component.seekTo({ target: { value: 10 } });
    fixture.detectChanges();
    let seekAmount = component.totalDuration / 10;
    expect(videoElement.currentTime).toBe(20);
  });
});
