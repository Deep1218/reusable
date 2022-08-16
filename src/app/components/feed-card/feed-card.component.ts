import { Component, Input, OnInit } from '@angular/core';
import {
  faEllipsisVertical,
 
  faCommenting,faThumbsUp,faShare
} from '@fortawesome/free-solid-svg-icons';

import {
 
  faComment,
  
} from '@fortawesome/free-regular-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css'],
})
export class FeedCardComponent {
  hoverOn = false;
  faEllipsisV = faEllipsisVertical;
  faPaperclip = faCommenting;

  
  faThumbsUp=faThumbsUp;
  faComment = faComment;faShare=faShare;

  

  // Required Data
  @Input() postData!: any;
  @Input() userData!: any;

  commentForm!: FormGroup;


  constructor(private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.commentForm?.value);
    this.commentForm.reset();
  }
}
