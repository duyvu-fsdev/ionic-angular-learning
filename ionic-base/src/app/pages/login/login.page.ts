import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
 selector: 'app-login',
 templateUrl: './login.page.html',
 styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 loginForm: FormGroup;

 constructor(private router: Router, private formBuilder: FormBuilder) {
  this.loginForm = this.formBuilder.group({
   email: ['admin@gmail.com', [Validators.required, Validators.email]],
   password: ['000000', [Validators.required, Validators.minLength(6)]],
  });
 }

 ngOnInit() {}

 login() {
  console.log(this.loginForm.value);
  this.router.navigate(['home']);
 }

 goToRegister() {
  this.router.navigate(['register']);
 }

 get e() {
  return this.loginForm.get('email');
 }
 get p() {
  return this.loginForm.get('password');
 }
}
