import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { filter, map, Subscription } from 'rxjs';
import { LoginInfor, User } from 'src/app/models/user';
import { AppState } from 'src/app/NgRx/store/AppState';
import { AuthState, login, loginFail, loginSuccess } from 'src/app/NgRx/store/auth/auth.slice';
import { hide, show } from 'src/app/NgRx/store/loading/loading.slice';
import { AuthService } from 'src/app/services/auth.service';
@Component({
 selector: 'app-login',
 templateUrl: './login.page.html',
 styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 loginForm: FormGroup;

 authStateSubscription!: Subscription;
 loginInfor!: LoginInfor;
 currentUser!: User;

 constructor(
  private navCtrl: NavController,

  private toastController: ToastController,
  private store: Store<AppState>,
  private router: Router,
  private formBuilder: FormBuilder,
  private authService: AuthService,
 ) {
  this.loginForm = this.formBuilder.group({
   email: ['a@gmail.com', [Validators.required, Validators.email]],
   password: ['000000', [Validators.required]],
  });
 }

 ngOnInit() {
  this.authStateSubscription = this.store
   .select('auth')
   .pipe(map((state) => state))
   .subscribe((authState) => {
    this.authStateTracking(authState);
    if (authState.isLoggedIn) this.router.navigate(['home']);
   });
 }

 authStateTracking(authState: AuthState) {
  if (authState.isRegistering || authState.isLoggingIn) this.store.dispatch(show());
  else this.store.dispatch(hide());
  if (authState.isLoggingIn) this.onIsLoggingIn();
  if (authState.isLoggedIn) this.onIsLoggedIn();
  if (authState.errorLogin) this.onIsLoginFail(authState);
 }

 onIsLoggingIn() {
  this.authService.login(this.loginForm.value).subscribe(
   (res) => this.store.dispatch(loginSuccess({ currentUser: res.data.currentUser })),
   (e) => this.store.dispatch(loginFail({ errorLogin: e.error.errors })),
  );
 }

 onIsLoggedIn() {
  this.presentToast('onIsLoggedIn', 'success');
 }

 onIsLoginFail(authState: AuthState) {
  this.presentToast(authState.errorLogin.errorMessages, 'danger');
 }

 async presentToast(
  message: string,
  color: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark',
 ) {
  const toast = await this.toastController.create({
   message,
   duration: 1500,
   position: 'bottom',
   color,
  });
  await toast.present();
 }

 handleLogin() {
  if (this.loginForm.valid) this.store.dispatch(login());
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

 ngOnDestroy(): void {
  this.authStateSubscription.unsubscribe();
 }
}
