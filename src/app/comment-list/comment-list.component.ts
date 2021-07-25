import { Component, OnInit } from '@angular/core';
import { CommentHandlerService } from '../comment-handler.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  comments = [];
  constructor(private commentHandlerSvc: CommentHandlerService) { }

  ngOnInit() {
    this.subscribeForComments();
  }

  subscribeForComments(){
    this.commentHandlerSvc.getComments()
        .subscribe((response) => {
          this.comments = response;
    });
  }

}
