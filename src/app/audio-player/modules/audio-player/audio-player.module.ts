import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from '../../components/audio-player/audio-player.component';
import { SecondConverterPipe } from '../../pipes/second-converter.pipe';

@NgModule({
  declarations: [AudioPlayerComponent, SecondConverterPipe],
  imports: [CommonModule],
  exports: [AudioPlayerComponent],
})
export class AudioPlayerModule {}
