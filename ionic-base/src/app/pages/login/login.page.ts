import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/AppState';
import { hide, show } from 'src/store/loading/loading.slice';

@Component({
 selector: 'app-login',
 templateUrl: './login.page.html',
 styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 loginForm: FormGroup;

 constructor(
  private store: Store<AppState>,
  private router: Router,
  private formBuilder: FormBuilder,
 ) {
  this.loginForm = this.formBuilder.group({
   email: ['', [Validators.required, Validators.email]],
   password: ['', [Validators.required, Validators.minLength(6)]],
  });
 }

 ngOnInit() {}

 login() {
  this.store.dispatch(show());
  setTimeout(() => {
   this.store.dispatch(hide());
   this.router.navigate(['home']);
  }, 1000);
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
