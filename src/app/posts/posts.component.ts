import { Component, OnInit, DoCheck } from '@angular/core';
import { Post } from '../service/data.service';
import { FunctionsService } from '../service/functions.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, DoCheck {

  subjects: Post[] = []

  constructor(
    public funService: FunctionsService,
  ) { }

  ngOnInit(): void {
    this.subjects = this.funService.filterSubjects()
  }
  ngDoCheck() {
    this.subjects = this.funService.filterSubjects()
  }
}
