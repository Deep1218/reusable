import { Component } from '@angular/core';
import { ListData } from './components/list-one/list-one.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  data: ListData[] = [
    {
      id: 1,
      imgUrl: 'assets/img/sample-img.jpg',
      title: 'Oranges',
      line1: '50 / Kg',
      line2: 'Farm picked fresh oranges.',
    },
    {
      id: 2,
      imgUrl: 'assets/img/sample-img2.jpg',
      title: 'Banana',
      line1: '40 / Kg',
      line2: 'Farm picked fresh banana.',
    },
    {
      id: 3,
      imgUrl: 'assets/img/sample-img3.jpg',
      title: 'Apple',
      line1: '150 / Kg',
      line2: 'Farm picked fresh apple.',
    },
    {
      id: 4,
      imgUrl: 'assets/img/sample-img4.jpg',
      title: 'Pineapple',
      line1: '87 / Kg',
      line2: 'Farm picked fresh pineapple.',
    },
  ];

  onClick(index: number) {
    switch (index) {
      case 1:
        this.sortAscendingTitle();
        break;
      case 2:
        this.sortDescendingTitle();
        break;
      case 3:
        this.sortAscendingNumber();
        break;
      case 4:
        this.sortDescendingNumber();
        break;
    }
  }

  sortAscendingTitle() {
    this.data = _.sortBy(this.data, 'title');
  }

  sortDescendingTitle() {
    this.data = _.sortBy(this.data, 'title').reverse();
  }

  sortAscendingNumber() {
    this.data = _.sortBy(this.data, 'id');
  }

  sortDescendingNumber() {
    this.data = _.sortBy(this.data, 'id').reverse();
  }
}
