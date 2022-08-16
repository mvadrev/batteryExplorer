import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,
  HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private formBuilder: FormBuilder, private loginService: LoginService, private jwtDecode: JwtHelperService) { }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    email:['', [Validators.email, Validators.required]],
    password:['', [Validators.required]]
  })

  submitForm() {
    console.log(this.loginForm.value)
    if(this.loginForm.valid) {
      console.log("valid, logging in...", this.loginForm.value.email, this.loginForm.value.password);
      this.loginUser(this.loginForm.value.email, this.loginForm.value.password)
    }
  }

  goToReg() {
    console.log("nav")
    this.route.navigate(['/register'])
  }

  loginUser(userName: string, password: string) {
    let resp:any;
    let result = this.loginService.loginUser(userName, password).subscribe(
      {
        next: (response: any) => {                           //next() callback
             console.log('response received')
             this.route.navigate(['dashboard'])
             localStorage.setItem('token', response.token)
        
      },
      error: (error: any) => {
        console.log(error)
      }
    }
    )
  

  }
// localStorage.setItem("token", res['token']);
      // const helper = new JwtHelperService();
      // const decodedToken = helper.decodeToken(res['token']);
      // console.log(decodedToken, decodedToken['user']['roles'][0] );
      // if(decodedToken['user']['roles'][0].includes('admin')) {
      //   // DO routing for admin
      //   console.log("roles is admin")
      // }
      // if(decodedToken['user']['roles'][0] == 'user') {
      //   // DO routing for admin
      //   console.log("roles is user")
      //   this.route.navigate(['dashboard'])

      // }


}