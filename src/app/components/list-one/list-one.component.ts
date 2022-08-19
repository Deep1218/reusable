import { Component, Input, OnInit } from '@angular/core';

export interface listData {
  id: number;
  imgUrl?: string;
  title?: string;
  name?: string;
  line1?: string;
  line2?: string;
}
@Component({
  selector: 'app-list-one',
  templateUrl: './list-one.component.html',
})
export class ListOneComponent implements OnInit {
  img: boolean = false;
  title: boolean = false;
  line1: boolean = false;
  line2: boolean = false;

  @Input() data!: listData;
  @Input() border: boolean = true;
  @Input() position: string = 'start';
  @Input() imgShape: string = 'rounded';

  ngOnInit(): void {
    this.setProperties();
  }

  setProperties() {
    if (this.data.imgUrl) {
      this.img = true;
    }

    if (this.data.title || this.data.name) {
      this.title = true;
    }

    if (this.data.line1) {
      this.line1 = true;
    }

    if (this.data.line2) {
      this.line2 = true;
    }
  }
}
