import { Injectable } from '@angular/core';

import { FunctionsService } from './functions.service';

@Injectable({
  providedIn: 'root'
})
export class AtuthorisationService {
  private isLogined: boolean = false
  buttonText: string = 'Sign in'

  changeStatus() {
    setTimeout(() => {
      this.isLogined = !this.isLogined
      if (this.isLogined) {
        this.buttonText = 'Sign out';
      } else {
        this.funService.HomePage();
        this.buttonText = 'Sign in'
      }
    }, 500)
  }

  authorised(): Promise<boolean> {
    return new Promise(resolve => setTimeout(() => {
      resolve(this.isLogined)
    }, 500)
    )
  }
  constructor(private funService: FunctionsService) { }
}
