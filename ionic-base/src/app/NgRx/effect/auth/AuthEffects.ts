import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { AuthState, loginSuccess, logout } from '../../store/auth/auth.slice';

@Injectable()
export class AuthEffects {
 constructor(private actions$: Actions, private store: Store<{ auth: AuthState }>, private navCtrl: NavController) {}
 logout$ = createEffect(
  () =>
   this.actions$.pipe(
    ofType(logout),
    tap(() => this.navCtrl.navigateRoot('/login')),
   ),
  { dispatch: false },
 );
 loginSuccess$ = createEffect(
  () =>
   this.actions$.pipe(
    ofType(loginSuccess),
    tap(() => this.navCtrl.navigateRoot('/home')),
   ),
  { dispatch: false },
 );
}
