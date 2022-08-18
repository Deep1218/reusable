import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postData = [
    {
      photoUrl: 'assets/img/2.png',
      userId: {
        imgUrl: 'assets/img/1.png',
        username: 'Solution Analysts',
      },
      updateAt: new Date(Date.now()),
      likes: Math.ceil(Math.random() * 1000),
      comments: Math.ceil(Math.random() * 1000),
      shares: Math.ceil(Math.random() * 100),
    },
    {
      photoUrl: 'assets/img/2.png',
      userId: {
        imgUrl: 'assets/img/1.png',
        username: 'Solution Analysts',
      },
      updateAt: new Date(Date.now()),
      likes: Math.ceil(Math.random() * 1000),
      comments: Math.ceil(Math.random() * 1000),
      shares: Math.ceil(Math.random() * 100),
    },
  ];
  userData = {
    imgUrl: 'assets/img/1.png',
    username: 'Solution Analysts',
  };
}
