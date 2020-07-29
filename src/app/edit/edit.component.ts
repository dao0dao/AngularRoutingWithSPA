import { Component, OnInit } from '@angular/core';
import { DataService, Post } from '../service/data.service';
import { FunctionsService } from '../service/functions.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})


export class EditComponent implements OnInit {

  posts: Post[]
  postsBySub: Post[]

  postsBySubject(subjectId: number) {
    this.postsBySub = this.posts.filter(post => post.subjectId === subjectId)
    return this.postsBySub
  }

  activTopic(subjectId: number) {
    this.funService.filterSubjects().map(topic => { if (topic.subjectId === subjectId) { topic.isActive = !topic.isActive } })
  }


  constructor(
    private dataService: DataService,
    public funService: FunctionsService) { }

  ngOnInit() {
    this.posts = [...this.dataService.posts]
    this.posts.sort((a, b) => (a.subjectId - b.subjectId));
    this.posts.sort((a, b) => (b.postId - a.postId));
  }
}
