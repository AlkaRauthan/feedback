import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentHandlerService {

  commentSource: Subject<any> = new Subject();
  comments = [];
  constructor() { }

  getComments(){
    return this.commentSource.asObservable();
  }

  setComments(comment){
    this.comments.push(comment);
    this.commentSource.next([...this.comments]);
  }
}
