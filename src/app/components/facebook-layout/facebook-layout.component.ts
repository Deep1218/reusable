import { Component, Input } from '@angular/core';
import {
  faEllipsisH,
  faThumbsUp,faShare, faXmark,faComment,
} from '@fortawesome/free-solid-svg-icons';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facebook-layout',
  templateUrl: './facebook-layout.component.html',
  styleUrls: ['./facebook-layout.component.css'],
})
export class FacebookLayoutComponent {
  
  hoverOn = false;
  faEllipsisH =   faEllipsisH;
  faXmark=faXmark;
  faThumbsUp=faThumbsUp;
  faComment = faComment;faShare=faShare;
// get the post data & usre data 
  @Input() postData!: any;
  @Input() userData!: any;

  commentForm!: UntypedFormGroup;
  item: undefined;
    constructor(private fb: UntypedFormBuilder) {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
    });
  }

 
}
