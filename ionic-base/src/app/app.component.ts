import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { AuthState, logout } from './NgRx/store/auth/auth.slice';
@Component({
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.scss'],
})
export class AppComponent {
 public appPages = [
  { title: 'Pickup Calls', url: '/pickup-calls', icon: 'call' },

  { title: 'Pickup Call', url: '/pickup-call', icon: 'paper-plane' },
 ];
 constructor(private store: Store<{ auth: AuthState }>, private navCtrl: NavController) {}

 ngOnInit() {
  this.store
   .select('auth')
   .pipe(
    map((state) => state.isLoggedIn),
    tap((isLoggedIn) => {
     if (!isLoggedIn) {
      this.navCtrl.navigateRoot('/login');
     }
    }),
   )
   .subscribe();
 }

 handleLogout() {
  this.store.dispatch(logout());
 }
}
