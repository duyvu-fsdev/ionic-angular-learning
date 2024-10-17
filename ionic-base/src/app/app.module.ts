import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingModule } from './components/loading/loading.module';
import { AppStoreModule } from './NgRx/store/AppStore.Module';

@NgModule({
 declarations: [AppComponent],
 imports: [
  BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  ...AppStoreModule,
  StoreDevtoolsModule.instrument({ maxAge: 25 }),
  LoadingModule,
  HttpClientModule,
 ],
 providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
 bootstrap: [AppComponent],
})
export class AppModule {}
