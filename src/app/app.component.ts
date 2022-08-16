import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reusable';
  postData = [
    {
      photoUrl: 'assets/img/images.jpeg',
      userId: {
        imgUrl: 'assets/img/download.png',
        username: 'India',
      },
      updateAt: new Date(Date.now()),
      likes: Math.ceil(Math.random() * 1000000),
      comments: Math.ceil(Math.random() * 1000),
    },
    
  ];
  userData = {
    imgUrl: 'assets/img/download.png',
    username: 'the_unkown',
  };
}
