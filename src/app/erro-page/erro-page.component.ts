import { Component } from '@angular/core';
import { FunctionsService } from '../service/functions.service';

@Component({
  selector: 'app-erro-page',
  templateUrl: './erro-page.component.html',
  styleUrls: ['./erro-page.component.scss']
})
export class ErroPageComponent {

  constructor(public funService: FunctionsService) { }
}
