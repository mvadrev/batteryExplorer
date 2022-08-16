import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private route: Router, private http: HttpClient) { }

  urlPath: string = "http://localhost:3000/api/";

  registerUser(data:any) {
    const headers = {
      Accept: 'application/json'
    }
    const url = this.urlPath + 'auth/register'
    let newData = {
      last_name: data['last_name'],
      first_name: data['first_name'],
      email: data['email'],
      password: data['password']
    }
    console.log(newData)
    return this.http.post(url, newData, {headers})
  }
}
