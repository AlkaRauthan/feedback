import { Component, OnInit } from '@angular/core';
import { CommentHandlerService } from '../comment-handler.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  comment;
  constructor(public commentHandlerSvc: CommentHandlerService) { }

  ngOnInit() {
  }

  saveComment(){
    this.commentHandlerSvc.setComments(this.comment);
  }

}
