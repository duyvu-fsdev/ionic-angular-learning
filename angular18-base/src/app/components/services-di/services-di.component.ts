import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
 selector: 'app-services-di',
 templateUrl: './services-di.component.html',
 styleUrls: ['./services-di.component.scss', '../common.scss'],
})
export class ServicesDiComponent {
 private subscription!: Subscription;
 hasUser$!: boolean;
 constructor(private authService: AuthService) {}
 get hasUser(): boolean {
  return this.authService.isLoggedIn;
 }
 ngOnInit() {
  this.subscription = this.authService.isLoggedIn$.subscribe((loggedIn) => (this.hasUser$ = loggedIn));
 }
 login() {
  this.authService.handleLogin();
 }
 logout() {
  this.authService.handleLogout();
 }
 login2() {
  this.authService.handleLogin2();
 }
 logout2() {
  this.authService.handleLogout2();
 }
 ngOnDestroy() {
  if (this.subscription) this.subscription.unsubscribe();
 }
}
