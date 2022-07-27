import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hhmmss',
})
export class SecondConverterPipe implements PipeTransform {
  transform(seconds: number): string {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor((seconds % 3600) % 60);

    let hDisplay = h < 10 ? '0' + h.toString() : h.toString();
    let mDisplay = m < 10 ? '0' + m.toString() : m.toString();
    let sDisplay = s < 10 ? '0' + s.toString() : s.toString();

    let result =
      (hDisplay == '00' ? '' : hDisplay + ':') + mDisplay + ':' + sDisplay;

    return result;
  }
}
