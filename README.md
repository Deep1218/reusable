# Slider/Carousel

This project is about Slider/Carousel

## Project Prerequisite

1. Angular CLI v13.0.0
2. Node.js v16.16.0
3. Project uses [ngx-bootstrap](https://www.npmjs.com/package/ngx-bootstrap) v8.0.0, To add ngx-bootstrap : <br /> `ng add ngx-bootstrap@8.0.0`

## Adding Component to your project

1. Copy slider [folder](https://github.com/Deep1218/reusable/tree/slider/src/app) to your project
2. Add `SliderComponent` to your module
3. See [documentation](https://github.com/Deep1218/reusable/tree/slider#documentation) for more details

## Running Development server

1. `npm i` in root directory
2. `ng serve` for dev server (`http://localhost:4200/`)

## Running unit tests

1. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Documentation

See [slider Component](https://github.com/Deep1218/reusable/blob/slider/src/app/slider) for example.

### In ts file of your Component

&nbsp;&nbsp; Copy this Code..

```
 sliderConfig = {
    width: 1000, // width of the carousel in 'px'
    height: 300, // height of the carousel in 'px'
    margin: 20, // It will add margin on 4 sides in 'px'
    itemsPerSlide: 3, //  no. of Items to display on screen
    noWrapSlides: false, // If noWrapSlides is false, then slides movement will not in loop
    showIndicator: true, // If showIndicator is true , It will show the Indicators on the screen
    singleSlideOffset: true, // If singleSlideOffset is set to true, It will shift slide for one item
    isAnimated: false, // Turn on/off animation. "Animation doesn't work for multilist carousel"
    interval: 2000, // Delay of item cycling in "milliseconds". If false, carousel won't cycle automatically.
    noPause: false, // If noPause is set to false , carousel autoplay will be stopped when carousel receives hover.
    pauseOnFocus: true, // If pauseOnFocus is set to true , carousel autoplay will be stopped when carousel receives focus.
  };

  imagesData = [
    'https://images3.alphacoders.com/276/276565.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFUR6CMpA6Dqxx-SEaYdTUUSwEBWBJgSCqA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQNHNqeJRSlHdWhj84Q8XYfcqRL5w-mMJrA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGa04OI-Nz_WVhfGsDZy-lXU9Z2LwpWnvtQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7ltn8VLayuSoaHmbGQnv4tzVnT-xC0FumQ&usqp=CAU',
  ];
```

&nbsp;&nbsp; Here, `sliderConfig` is to set the configuration of the slider that you want to set and `imagesData` is the data that you want to display in the slider/carousel.

### In HTML file of your Component

&nbsp;&nbsp; Copy this Code..

```
<app-slider [imagesData]="imagesData" [sliderConfig]="sliderConfig"></app-slider>

```

&nbsp;&nbsp; Here, `<app-slider>` is the selector of the slider component and you have to pass the imagesData and sliderConfig data in it.
