import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService, Post } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  HomePage() {
    this.router.navigate(['/'])
  }

  PostPage() {
    this.router.navigate(['posts'])
  }

  filterPosts() {
    let subId: number;
    let posts: Post[];
    this.route.queryParams.subscribe(
      res => subId = parseInt(res.subject)
    );
    posts = this.dataPosts.posts.filter(post => post.subjectId === subId);
    return posts
  }

  filterSubjects() {
    let postsBySubject: Post[] = []
    let posts: Post[];
    posts = this.dataPosts.posts;
    for (let i = 0; i < posts.length; i++) {
      function findSubject(element: Post) {
        if (element.subjectId === i) {
          return element
        }
      }
      postsBySubject.push(posts.find(findSubject));
    }
    postsBySubject = postsBySubject.filter(sub => sub !== undefined)
    return postsBySubject
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataPosts: DataService) { }

}
