import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../service/functions.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public funService: FunctionsService) { }

  ngOnInit() {
  }

}
