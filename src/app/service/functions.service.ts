import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService, Post } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  openedModal: boolean = false
  titleTopic: boolean = false
  titleAnswer: boolean = false

  HomePage() {
    this.router.navigate(['/'])
  }

  PostPage() {
    this.router.navigate(['posts'])
  }

  newTopic() {
    this.titleTopic = true;
    this.openModal();
  }
  newAnswer() {
    this.titleAnswer = true;
    this.openModal()
  }
  openModal() {
    this.openedModal = true
  }

  closeModal() {
    this.titleTopic = false
    this.titleAnswer = false
    this.openedModal = false
  }

  addTopic(subjectId: number, subject: string, author: string, postId: number, text: string) {
    let post: Post
    post = {
      subjectId,
      subject,
      author,
      postId,
      text
    }
    this.dataPosts.posts.push(post);
    this.dataPosts.postId++;
    this.dataPosts.subjectId++;
    this.closeModal();
  }

  addAnswer(subjectId: number, subject: string, author: string, postId: number, text: string) {
    let post: Post
    post = {
      subjectId,
      subject,
      author,
      postId,
      text
    }
    this.dataPosts.posts.push(post);
    this.dataPosts.postId++;
    this.closeModal();
  }

  filterPosts() {
    let subId: number;
    let posts: Post[];
    this.route.queryParams.subscribe(
      res => subId = parseInt(res.subjectId)
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
