# Audio Player

This project is about Audio player
You can pass url or local file.
It can be integreted using service or by adding component to your template.

## Project Prerequisite

1. Angular CLI v13.0.0
2. Node.js v16.16.0

## Running Development server

1. `npm i` in root directory
2. `ng serve` for dev server (`http://localhost:4200/`)

## Running unit tests

1. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Adding Component to your project

- Copy Audio Player module [folder](https://github.com/Deep1218/reusable/tree/audio-player/src/app) to your project
- Add AudioPlayerModule to your module

```

@NgModule({
  ...
  imports: [
    ...
    AudioPlayerModule,
    ...
  ],
  ...
})
```

- Add AudioPlayerComponent to your template

```
...
<audio-player [src]="src" title="Your Song Name"></audio-player>
...
```

- Use AudioPlayerService to load audio dynamically.

```
import { AudioPlayerService } from './audio-player/services/audio-player.service';
...
constructor(private audioService: AudioPlayerService) {}
...
this.audioService.load('YOUR_AUDIO_FILE_URL',"AUDIO_FILE_NAME");
```

- Or pass local audio file as a parameter

```
onSelectFile(e: any){
  let file = e.target.files[0];
  this.audioService.load(file);
}
```

See [app component](https://github.com/Deep1218/reusable/blob/audio-player/src/app/app.component.ts) for example
