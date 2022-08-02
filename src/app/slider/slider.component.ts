import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input('sliderConfig') sliderConfig: any;
  @Input('imagesData') imagesData: any[] = [];

  noWrapSlides!: boolean;
  showIndicator!: boolean;
  singleSlideOffset!: boolean;
  itemsPerSlide!: number;
  height!: number;
  width!: number;
  isAnimated!: boolean;
  interval!: number;
  noPause!: boolean;
  pauseOnFocus!: boolean;

  imgheight!: number;
  imgwidth!: number;
  margin!: number;

  ngOnInit(): void {
    this.width = this.sliderConfig.width || 800;
    this.height = this.sliderConfig.height || 600;
    this.itemsPerSlide = this.sliderConfig.itemsPerSlide || 1;
    this.noWrapSlides = this.sliderConfig.noWrapSlides || false;
    this.showIndicator = this.sliderConfig.showIndicator || true;
    this.singleSlideOffset = this.sliderConfig.singleSlideOffset || false;
    this.isAnimated = this.sliderConfig.isAnimated || false;
    this.interval = this.sliderConfig.interval || false;
    this.noPause = this.sliderConfig.noPause || false;
    this.pauseOnFocus = this.sliderConfig.pauseOnFocus || false;
    this.margin = this.sliderConfig.margin || 0;

    this.imgheight = this.height - this.margin * 2;
    this.imgwidth =
      (this.width - this.margin * 2 * this.itemsPerSlide) / this.itemsPerSlide;
  }
}
