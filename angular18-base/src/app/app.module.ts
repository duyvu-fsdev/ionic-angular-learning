import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustompipesComponent } from './components/custompipes/custompipes.component';
import { DetailsComponent } from './components/details/details.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgModelBindingComponent } from './components/ng-model-binding/ng-model-binding.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ServicesDiComponent } from './components/services-di/services-di.component';
import { HighLightDirective } from './Directives/high-light.directive';
import { CustomAsyncPipe, CustomCurrencyPipe, CustomDatePipe, GmailGeneratePipe } from './Pipes/custompipes.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
 declarations: [
  AppComponent,
  HomeComponent,
  HousingLocationComponent,
  DetailsComponent,
  NgModelBindingComponent,
  DirectivesComponent,
  HighLightDirective,
  PipesComponent,
  CustomDatePipe,
  CustompipesComponent,
  GmailGeneratePipe,
  CustomAsyncPipe,
  ServicesDiComponent,
  HttpClientComponent,
  MenuComponent,
  CustomCurrencyPipe,
 ],
 imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule, FormsModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
