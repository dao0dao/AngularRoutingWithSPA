import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService, Post } from '../service/data.service';
import { FunctionsService } from '../service/functions.service';
import { Router } from '@angular/router';
import { AtuthorisationService } from '../service/atuthorisation.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit, DoCheck {

  posts: Post[]
  postsBySub: Post[]
  activeSubject: Post[]

  postsBySubject(subjectId: number) {
    this.postsBySub = this.posts.filter(post => post.subjectId === subjectId)
    return this.postsBySub
  }

  activTopic(subjectId: number) {
    this.activeSubject.map(topic => { if (topic.subjectId === subjectId) { topic.isActive = !topic.isActive } })
  }


  constructor(
    private dataService: DataService,
    public funService: FunctionsService,
    private router: Router,
    private authoService: AtuthorisationService
    ) { }

  ngOnInit() {
    this.posts = [...this.dataService.posts]
    this.posts.sort((a, b) => (a.subjectId - b.subjectId));
    this.posts.sort((a, b) => (b.postId - a.postId));
    this.activeSubject = this.funService.filterSubjects()
  }
  ngDoCheck() {
    this.posts = [...this.dataService.posts]
    
  }
}
