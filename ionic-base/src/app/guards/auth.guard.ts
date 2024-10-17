import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AppState } from '../NgRx/store/AppState';
import { AuthState } from '../NgRx/store/auth/auth.slice';

export const authGuard: CanActivateFn = (route, state): Observable<boolean> => {
 const store = inject(Store<AppState>);
 const navCtrl = inject(NavController);

 return store.select('auth').pipe(
  take(1),
  map((authState: AuthState) => authState.isLoggedIn),
  tap((isLoggedIn) => {
   if (!isLoggedIn) {
    navCtrl.navigateRoot('/login');
   }
  }),
 );
};
