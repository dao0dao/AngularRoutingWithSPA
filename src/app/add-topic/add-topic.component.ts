import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../service/functions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.scss']
})

export class AddTopicComponent implements OnInit {

  topicForm: FormGroup

  addTopic() {
    this.funService.addTopic(this.subjectId, this.subject, this.author, this.postId, this.text)
  }

  get subjectId() {
    return this.topicForm.get('subjectId').value
  }
  get subject() {
    return this.topicForm.get('subject').value
  }
  get author() {
    return this.topicForm.get('author').value
  }
  get postId() {
    return this.topicForm.get('postId').value
  }
  get text() {
    return this.topicForm.get('text').value
  }

  constructor(
    public funService: FunctionsService,
    private fb: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.topicForm = this.fb.group({
      subjectId: [this.dataService.subjectId],
      subject: ['', Validators.required],
      author: ['', Validators.required],
      postId: [this.dataService.postId],
      text: ['', Validators.required]
    })
  }
}
