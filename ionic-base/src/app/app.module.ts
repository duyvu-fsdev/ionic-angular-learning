import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from 'src/store/AppStore.Module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingModule } from './components/loading/loading.module';

@NgModule({
 declarations: [AppComponent],
 imports: [
  BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  ...AppStoreModule,
  StoreDevtoolsModule.instrument({ maxAge: 25 }),
  LoadingModule,
 ],
 providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
 bootstrap: [AppComponent],
})
export class AppModule {}
