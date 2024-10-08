import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root',
})
export class AuthService {
 private isLoggedInSubject = new BehaviorSubject<boolean>(false);
 isLoggedIn$ = this.isLoggedInSubject.asObservable();
 isLoggedIn = false;
 handleLogin() {
  this.isLoggedIn = true;
 }
 handleLogout() {
  this.isLoggedIn = false;
 }
 handleLogin2() {
  this.isLoggedInSubject.next(true);
 }
 handleLogout2() {
  this.isLoggedInSubject.next(false);
 }
}
