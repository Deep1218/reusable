import { Component, Input } from '@angular/core';
import {
  faEllipsisH,
  faThumbsUp,faShare, faXmark,faComment,
} from '@fortawesome/free-solid-svg-icons';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css'],
})
export class FeedCardComponent {
  hoverOn = false;
  faEllipsisH =   faEllipsisH;
  faXmark=faXmark;
  faThumbsUp=faThumbsUp;
  faComment = faComment;faShare=faShare;

  @Input() postData!: any;
  @Input() userData!: any;

  commentForm!: UntypedFormGroup;
    constructor(private fb: UntypedFormBuilder) {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log(this.commentForm?.value);
    this.commentForm.reset();
  }
}
