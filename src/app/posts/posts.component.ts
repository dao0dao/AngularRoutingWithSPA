import { Component, OnInit } from '@angular/core';
import { DataService, Post } from '../service/data.service';
import { FunctionsService } from '../service/functions.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[]
  subjects: Post[] = []

  constructor(
    public funService: FunctionsService,
  ) { }

  ngOnInit(): void {
    this.subjects = this.funService.filterSubjects()
  }
}
