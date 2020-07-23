import { Component, OnInit } from '@angular/core';
import { DataService, Post } from '../service/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[]
  subjects :Post[] = []

  constructor(private DataServie: DataService) { }

  ngOnInit(): void {
    this.posts = this.DataServie.posts
    for (let i = 0; i < this.posts.length; i++) {
      function findSubject(element: Post) {
        if (element.subjectId === i) {
          return element
        }
      }
      this.subjects.push(this.posts.find(findSubject));
      this.subjects = this.subjects.filter(sub => sub !== undefined);
    }
  }
}
