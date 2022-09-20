import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentDate = new Date();

  formatList = [
    'y/M/d',
    'y/MM/d',
    'dd-MM-yy',
    'MM/dd/yyyy', 
    'dd-MM-yy',
    'MM-dd-yy',
    'MMM/dd/yy',
    'MMMM dd,yyyy',
    
    ];

  dateFormat = this.formatList[0];


}
