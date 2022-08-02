import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reusable';

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
}
