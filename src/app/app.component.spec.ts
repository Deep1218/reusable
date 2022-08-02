import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AudioPlayerModule } from './audio-player/modules/audio-player/audio-player.module';
import { AudioPlayerService } from './audio-player/services/audio-player.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AudioPlayerModule, ReactiveFormsModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('test load method', () => {
    let audioPlayerService = TestBed.inject(AudioPlayerService);
    component.urlForm.setValue({ url: 'xyz' });
    component.loadUrl();
    expect(audioPlayerService.src.getValue()).toEqual({
      type: 'path',
      src: 'xyz',
    });
  });

  it('load video from file', () => {
    fixture.detectChanges();
    let audioPlayerService = TestBed.inject(AudioPlayerService);
    const mockFile = new File([''], 'filename.mp3', { type: 'audio/mp3' });
    const mockEvt = { target: { files: [mockFile] } };
    const isValidFile = component.onFileSelect(mockEvt);
    expect(isValidFile).toBe(true);
    fixture.detectChanges();
    expect(audioPlayerService.src.getValue()).toEqual({
      type: 'blob',
      src: mockFile,
    });
  });

  it('load invalid video from file', () => {
    const mockFile = new File([''], 'filename.mp3', { type: 'video/mp4' });
    const mockEvt = { target: { files: [mockFile] } };
    let isValidFile = component.onFileSelect(mockEvt);
    fixture.detectChanges();
    expect(isValidFile).toBe(false);
  });
});
