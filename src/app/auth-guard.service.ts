import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AtuthorisationService } from './service/atuthorisation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    return this.authorisationService.authorised()
      .then(isLogined => {
        if (isLogined) {
          return true
        } else {
          this.router.navigate(['/'])
        }
      })
  }

  constructor(private authorisationService: AtuthorisationService, private router: Router) { }
}
