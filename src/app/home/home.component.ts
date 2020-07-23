import { Component } from '@angular/core';
import { FunctionsService } from '../service/functions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public funService: FunctionsService) { }

}
