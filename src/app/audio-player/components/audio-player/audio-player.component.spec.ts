import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondConverterPipe } from '../../pipes/second-converter.pipe';

import { AudioPlayerComponent } from './audio-player.component';

describe('AudioPlayerComponent', () => {
  let component: AudioPlayerComponent;
  let fixture: ComponentFixture<AudioPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudioPlayerComponent, SecondConverterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggle play pause', () => {
    let audio = fixture.nativeElement.querySelector('audio');
    let toggleBtn = fixture.nativeElement.querySelector('.thumbnail');
    expect(audio.paused).toBe(true);
    toggleBtn.click();
    fixture.detectChanges();
    toggleBtn.click();
    fixture.detectChanges();
    expect(audio.paused).toBe(true);
  });

  it('change icon when ended', () => {
    let toggleBtn = fixture.nativeElement.querySelector('.thumbnail');
    expect(component.isPlaying).toBe(false);
    toggleBtn.click();
    fixture.detectChanges();
    expect(component.isPlaying).toBe(true);
    component.onEnded();
    expect(component.isPlaying).toBe(false);
  });
});
