import { Component, Input, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
  @Input() postFromPostListComponent: Post[];
  constructor() {}

  ngOnInit() {}

  addLike(post : Post): void {
    //on incremente notre loveIts
    if(post){
      post.loveIts++;
    }
  }

  removeLike(post: Post): void {
    //on desincremente notre loveIts
    if (post) {
      post.loveIts--;
    }
  }
}
