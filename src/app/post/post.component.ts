import { Component, OnInit } from '@angular/core';
import { DataService, Post } from '../service/data.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Post[]

  constructor(private DataServie: DataService) { }

  ngOnInit() {
    this.posts = this.DataServie.posts
  }

}
