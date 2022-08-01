import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { VideoPlayerModule } from './video-player/module/video-player/video-player.module';
import { VideoPlayerService } from './video-player/services/video-player.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let videoPlayerService: VideoPlayerService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        VideoPlayerModule,
        BrowserModule,
        ReactiveFormsModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('test load method', () => {
    videoPlayerService = TestBed.inject(VideoPlayerService);
    component.urlForm.setValue({ url: 'xyz' });
    component.loadUrl();
    expect(videoPlayerService.src.getValue()).toEqual({
      type: 'path',
      src: 'xyz',
    });
  });

  it('load video from file', () => {
    videoPlayerService = TestBed.inject(VideoPlayerService);

    const mockFile = new File([''], 'filename.mp4', { type: 'video/mp4' });
    const mockEvt = { target: { files: [mockFile] } };
    const isValidFile = component.selectFile(mockEvt);
    expect(isValidFile).toBe(true);
    fixture.detectChanges();
    expect(videoPlayerService.src.getValue()).toEqual({
      type: 'blob',
      src: mockFile,
    });
  });

  it('load invalid video from file', () => {
    videoPlayerService = TestBed.inject(VideoPlayerService);

    const mockFile = new File([''], 'filename.mp3', { type: 'audio/mp3' });
    const mockEvt = { target: { files: [mockFile] } };
    let isValidFile = component.selectFile(mockEvt);
    fixture.detectChanges();

    expect(isValidFile).toBe(false);
  });
});
