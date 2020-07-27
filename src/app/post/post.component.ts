import { Component, OnInit, DoCheck } from '@angular/core';
import { Post } from '../service/data.service'
import { FunctionsService } from '../service/functions.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, DoCheck {

  posts: Post[]

  constructor(
    public funService: FunctionsService,
  ) { }

  ngOnInit() {
    this.posts = this.funService.filterPosts()
  }
  ngDoCheck() {
    this.posts = this.funService.filterPosts()
  }
}
