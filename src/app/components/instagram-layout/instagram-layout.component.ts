import { Component, OnInit,Input} from '@angular/core';
import {
  faEllipsisVertical,
  faHeart as faHeartSolid,
  faComment as faCommentSolid,
  faPaperPlane as faPaperPlaneSolid,
  faBookmark as faBookmarkSolid,
  faCommenting,
} from '@fortawesome/free-solid-svg-icons';

import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
  

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-instagram-layout',
  templateUrl: './instagram-layout.component.html',
  styleUrls: ['./instagram-layout.component.css']
})
export class InstagramLayoutComponent implements OnInit {
  hoverOn = false;
  faEllipsisV = faEllipsisVertical;
  faPaperclip = faCommenting;

  faHeartSolid = faHeartSolid;
  faHeart = faHeart;

  faCommentSolid = faCommentSolid;
  faComment = faComment;

  faPaperPlaneSolid = faPaperPlaneSolid;
  faPaperPlane = faPaperPlane;

  faBookmarkSolid = faBookmarkSolid;
  faBookmark = faBookmark;
  @Input() postData!: any;
  @Input() userData!: any;
  borderColor!: string;

  commentForm!: FormGroup;

  hexCode = [
    '#00A9EC',
    '#00DFB5',
    '#3B85DA',
    '#2FC193',
    '#7B91BC',
    '#D26321',
    '#004995',
    '#003780',
    '#EC3F79',
  ];

  constructor(private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.borderColor =
      this.hexCode[Math.floor(Math.random() * this.hexCode.length)];
  }
  onSubmit() {
    console.log(this.commentForm?.value);
    this.commentForm.reset();
  }

 

}
