import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from '../../components/video-player/video-player.component';
import { SecondConverterPipe } from '../../pipes/second-converter.pipe';

@NgModule({
  declarations: [VideoPlayerComponent, SecondConverterPipe],
  imports: [CommonModule],
  exports: [VideoPlayerComponent],
})
export class VideoPlayerModule {}
