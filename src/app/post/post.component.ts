import { Component, OnInit, DoCheck } from '@angular/core';
import { Post } from '../service/data.service'
import { FunctionsService } from '../service/functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, DoCheck {

  posts: Post[]

  constructor(
    public funService: FunctionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.posts = this.funService.filterPosts()
    if (this.posts.length === 1 && this.posts[0].subjectId === null) {
      this.router.navigate(['/error']);
    }
  }
  ngDoCheck() {
    this.posts = this.funService.filterPosts();
  }
}
