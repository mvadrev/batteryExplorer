import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private route: Router, private loginServices: LoginService) {}

  canActivate() {
    var token:any = null
    if(this.loginServices.isUserLoggedIn())  {
      token = localStorage.getItem('token')
    }

    
    const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken, decodedToken['user']['roles'][0] );
      if(decodedToken['user']['roles'][0].includes('admin')) {
        // DO routing for admin
        console.log("roles is admin")
        return true;
      }
      alert("Admin access needed");
      return false;
  }
  }
  

