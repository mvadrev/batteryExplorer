import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

   }

   urlpath = 'http://3.86.148.234:3000/api/'

   loginUser(userName: string, password: string): Observable<any> {
     const headers = {
       Accept: "application/json",
      }
      
      let data = {
        email: userName,
        password: password
      }
      const url = this.urlpath + 'auth/login'
      console.log("reachedw")
      return this.http.post(url, data, {headers})
   }

   isUserLoggedIn() {
    return !!localStorage.getItem('token');
   }
}
