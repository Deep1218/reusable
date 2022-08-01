# Video Player

This project is about Video player
You can change speed, seek 10 second, view in fullscreen,etc.
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

- Copy Video Player module [folder](https://github.com/Deep1218/reusable/tree/video-player/src/app) to your project
- Add VideoPlayerModule to your module

```

@NgModule({
  ...
  imports: [
    ...
    VideoPlayerModule,
    ...
  ],
  ...
})
```

- Add VideoPlayerComponent to your template

```
...
<video-player [src]="src"></video-player>
...
```

- Use VideoPlayerService to load video dynamically.

```
import { VideoPlayerService } from './video-player/services/video-player.service';
...
constructor(private videoService: VideoPlayerService) {}

this.videoService.load(YOUR_VIDEO_FILE_URL');
```

- Or pass local video file as a parameter

```
onSelectFile(e: any){
  let file = e.target.files[0];
  this.videoService.load(file);
}
```
