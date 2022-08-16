import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginServices: LoginService, private route: Router) {
  }

  canActivate() {
    if(this.loginServices.isUserLoggedIn()) {
      return true;
    }
    this.route.navigate(['login']);
    return false;
}
  
}
