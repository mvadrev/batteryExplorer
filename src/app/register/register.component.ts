import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Route } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private toast: NgToastService, 
    private registerService: RegisterService, 
    ) { }

  ngOnInit(): void {
  }

  registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.maxLength]],
    lastName:['', [Validators.required, Validators.maxLength]],
    email:['', [Validators.email, Validators.required]],
    password:['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    acceptTerms: ['',[Validators.required] ]
  })

  submitForm() {
    console.log(this.registerForm.value)
    this.showSuccess()
    if(this.registerForm.valid && this.registerForm.value.acceptTerms === true) {

      if(this.registerForm.value.password == this.registerForm.value.confirmPassword) {
        console.log("Valid, registering user...");
        let data: any = {
          last_name: this.registerForm.value.lastName,
          first_name: this.registerForm.value.firstName, 
          email: this.registerForm.value.email,
          password: this.registerForm.value.password
        }
        console.log("Data is", data)
        this.registerService.registerUser(data).subscribe((res) => {
          console.log(res)
          // this.route.
        }, (error) => {
          console.log(error);
        })
      }
      
      else {
        console.log("form invalid");
      }

    }
  }

  showSuccess() {
    this.toast.success({detail:"SUCCESS",summary:'Your Success Message'});
  }

}
