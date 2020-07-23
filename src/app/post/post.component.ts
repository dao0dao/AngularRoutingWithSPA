import { Component, OnInit } from '@angular/core';
import { DataService, Post } from '../service/data.service'
import { ActivatedRoute } from '@angular/router';
import { FunctionsService } from '../service/functions.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Post[]

  constructor(
    private funService: FunctionsService,
  ) { }

  ngOnInit() {
    this.posts = this.funService.filterPosts()
  }
}
