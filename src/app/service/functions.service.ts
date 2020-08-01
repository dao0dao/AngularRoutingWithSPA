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
  titleEdit: boolean = false
  editedPost: Post = null

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
  editPost(post: Post) {
    this.titleEdit = true;
    this.editedPost = post
    this.openModal()
  }
  openModal() {
    this.openedModal = true
  }

  closeModal() {
    this.titleTopic = false
    this.titleAnswer = false
    this.titleEdit = false
    this.editedPost = null
    this.openedModal = false
  }

  addTopic(subjectId: number, subject: string, author: string, postId: number, text: string) {
    let post: Post
    post = {
      subjectId,
      subject,
      author,
      postId,
      text,
      isActive: false
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

  saveChanges(subjectId: number, postId: number, text: string) {
    this.dataPosts.posts.map(post => {
      if (post.subjectId === subjectId && post.postId === postId) {
        post.text = text
      }
    })
    this.closeModal()
  }

  deletePost(subjectId: number, postId: number) {
    this.dataPosts.posts = this.dataPosts.posts.filter(post => !(post.subjectId == subjectId && post.postId == postId))
  }

  filterPosts() {
    let subId: number;
    let posts: Post[];
    this.route.queryParams.subscribe(
      res => subId = parseInt(res.subjectId)
    );
    posts = this.dataPosts.posts.filter(post => post.subjectId === subId);
    if (posts.length === 0) {
      let er: Post = {
        subjectId: null,
        postId: null,
        subject: '',
        author: '',
        text: ''
      }
      posts.push(er)
      return posts
    }
    return posts
  }

  filterSubjects() {
    let postsBySubject: Post[] = []
    let posts: Post[];
    posts = this.dataPosts.posts;
    for (let i = 0; i < this.dataPosts.subjectId; i++) {
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
