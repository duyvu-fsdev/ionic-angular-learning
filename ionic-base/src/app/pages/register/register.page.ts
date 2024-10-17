import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { LoginInfor, User } from 'src/app/models/user';
import { AppState } from 'src/app/NgRx/store/AppState';
import {
 AuthState,
 login,
 loginFail,
 loginSuccess,
 register,
 registerFail,
 registerSuccess,
} from 'src/app/NgRx/store/auth/auth.slice';
import { hide, show } from 'src/app/NgRx/store/loading/loading.slice';
import { AuthService } from 'src/app/services/auth.service';
import capitalize from 'src/utils/capitalize';

@Component({
 selector: 'app-register',
 templateUrl: './register.page.html',
 styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 registerForm: FormGroup;
 authStateSubscription!: Subscription;
 loginInfor!: LoginInfor;
 currentUser!: User;

 constructor(
  private toastController: ToastController,
  private store: Store<AppState>,
  private router: Router,
  private formBuilder: FormBuilder,
  private authService: AuthService,
 ) {
  this.registerForm = this.formBuilder.group(
   {
    name: ['duy vu', [Validators.required, Validators.maxLength(20)]],
    email: ['a@gmail.com', [Validators.required, Validators.email]],
    phoneNumber: ['0909090909', [Validators.required, this.phoneNumberIsInValid]],
    password: ['000000', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['000000', [Validators.required]],
   },
   { validator: this.confirmPasswordMatch },
  );
 }

 phoneNumberIsInValid(control: AbstractControl): { [key: string]: boolean } | null {
  const phoneNumber = control.value;
  const wrongNumber =
   /[A-Z]/.test(phoneNumber) ||
   /[a-z]/.test(phoneNumber) ||
   /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/.test(phoneNumber) ||
   /\u0300|\u0301|\u0303|\u0309|\u0323|\u02C6|\u0306|\u031B| + /.test(phoneNumber);
  return wrongNumber ? { NaN: true } : null;
 }

 confirmPasswordMatch(group: AbstractControl): { [key: string]: boolean } | null {
  const passwordControl = group.get('password');
  const confirmPasswordControl = group.get('confirmPassword');
  if (passwordControl?.valid && confirmPasswordControl?.valid) {
   const password = passwordControl.value;
   const confirmPassword = confirmPasswordControl.value;
   if (password !== confirmPassword) {
    return { passwordMismatch: true };
   }
  }
  return null;
 }

 get f() {
  return this.registerForm;
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
  if (authState.error) this.onFails(authState);
  if (authState.isRegistering) this.onIsRegisering();
  if (authState.isregistered) this.onIsRegisered();
  if (authState.isLoggingIn) this.onIsLoggingIn();
  if (authState.isLoggedIn) this.onIsLoggedIn(authState);
 }

 onIsRegisering() {
  const { name, ...data } = this.registerForm.value;
  const formValue = { name: capitalize(name as string), ...data };
  this.authService.register(formValue).subscribe(
   () => {
    this.loginInfor = { email: this.registerForm.value.email, password: this.registerForm.value.password };
    this.store.dispatch(registerSuccess({ loginInfor: this.loginInfor }));
   },
   (e) => this.store.dispatch(registerFail(e)),
  );
 }

 onIsRegisered() {
  this.store.dispatch(login());
 }

 onIsRegiserFail(authState: AuthState) {
  if (authState.error) {
   console.log(authState.error);
   this.callToaster('onIsRegiserFail', 'danger');
  }
 }

 onIsLoggingIn() {
  this.authService.login(this.loginInfor).subscribe(
   (d) => {
    this.currentUser = d.data.currentUser;
    this.store.dispatch(loginSuccess({ currentUser: this.currentUser }));
   },
   (e) => this.store.dispatch(loginFail(e)),
  );
 }

 onIsLoggedIn(authState: AuthState) {
  console.log(authState.currentUser);
 }

 onFails(authState: AuthState) {
  if (authState.error) {
   console.log(authState.error);
   this.callToaster('onFails', 'danger');
  }
 }

 async callToaster(
  message: string,
  color: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark',
 ) {
  const toaster = await this.toastController.create({
   position: 'bottom',
   message,
   color,
  });
  toaster.prepend();
 }

 handleRegister() {
  if (this.registerForm.valid) {
   this.store.dispatch(register());
  }
 }

 goToLogin() {
  this.router.navigate(['login']);
 }

 ngOnDestroy(): void {
  this.authStateSubscription.unsubscribe();
 }
}
