import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';

import {Comment} from "../comment";
import {VideoService} from "../video.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  entry: Comment;
  @Input()
  comments: Comment[];
  // comments = Comment[4];
  id : number;
  newComment:string;

  constructor(private videoService: VideoService, private route : ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.getComments(this.id);
  }

  ngOnInit() {

  }

  getComments(id): void {
    this.videoService.getComments(id)
      .subscribe(comments => {
        this.comments = comments});
  }

  addComment(id,text: string): void{
    this.entry = undefined;
    const newComment: Comment  = {comment : text}  as Comment;

    // newComment.comment= text;
    console.log("this id thw id" +id+newComment)
    this.videoService.addComment(id, newComment)
      .subscribe(comment => this.comments.push(comment));

  }

  onClick(){
    this.addComment(this.id,this.newComment);
    this.newComment = "";
  }
}
