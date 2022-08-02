import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    let sliderConfig = {
      width: 800, // width of the carousel
      height: 600, // height of the carousel
      // itemsPerSlide:3, //  no. of Items to display on screen
      noWrapSlides: false, // If noWrapSlides is false, then slides movement will not in loop
      // showIndicator:true, // If showIndicator is true , It will show the Indicators on the screen
      // singleSlideOffset:true, // If singleSlideOffset is set to true, It will shift slide for one item
      isAnimated: false, // Turn on/off animation. Animation doesn't work for multilist carousel
      interval: 2000, // Delay of item cycling in "milliseconds". If false, carousel won't cycle automatically.
      noPause: false, // If noPause is set to false , carousel autoplay will be stopped when carousel receives hover.
      pauseOnFocus: false, // If pauseOnFocus is set to true , carousel autoplay will be stopped when carousel receives focus.
    };
    component.sliderConfig = sliderConfig;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
