import { Component, ViewEncapsulation } from '@angular/core';
import { FunctionsService } from './service/functions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Angular Routing';

  constructor(public funService: FunctionsService) { }
}
