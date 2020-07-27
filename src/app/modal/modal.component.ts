import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../service/functions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService, Post } from '../service/data.service';
import { startWithSpace } from '../myValidators'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  topicForm: FormGroup
  title: string = ''
  buttonText: string = ''
  querryParams: any
  submitFunction: any

  addTopic() {
    this.funService.addTopic(this.subjectId.value, this.subject.value, this.author.value, this.postId.value, this.text.value)
  }
  addAnswer() {
    let subject: Post[]
    subject = this.funService.filterSubjects().filter(sub => {
      if (sub.subjectId === this.querryParams) {
        return sub
      }
    })
    this.funService.addAnswer(this.querryParams, subject[0].subject, this.author.value, this.postId.value, this.text.value)
  }

  get subjectId() {
    return this.topicForm.get('subjectId')
  }
  get subject() {
    return this.topicForm.get('subject')
  }
  get author() {
    return this.topicForm.get('author')
  }
  get postId() {
    return this.topicForm.get('postId')
  }
  get text() {
    return this.topicForm.get('text')
  }

  constructor(
    public funService: FunctionsService,
    private fb: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.topicForm = this.fb.group({
      subjectId: [this.dataService.subjectId],
      subject: ['', [Validators.required, startWithSpace()]],
      author: ['', [Validators.required, startWithSpace()]],
      postId: [this.dataService.postId],
      text: ['', [Validators.required, startWithSpace()]]
    });
    if (this.funService.titleTopic) {
      this.submitFunction = this.addTopic
      this.title = 'Add new topic';
      this.buttonText = 'Add a topic';
    } else if (this.funService.titleAnswer) {
      this.submitFunction = this.addAnswer
      this.subject.clearValidators()
      this.title = 'Add an answer'
      this.buttonText = 'Add a answer';

    };
    this.route.queryParams.subscribe(res => this.querryParams = parseInt(res.subjectId))
  }
}
