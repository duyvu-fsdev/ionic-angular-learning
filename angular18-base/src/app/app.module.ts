import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';
import { NgModelBindingComponent } from './components/ng-model-binding/ng-model-binding.component';
import { HighLightDirective } from './Directives/high-light.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomAsyncPipe, CustomDatePipe, GmailGeneratePipe } from './Pipes/custompipes.pipe';
import { CustompipesComponent } from './components/custompipes/custompipes.component';
import { ServicesDiComponent } from './components/services-di/services-di.component';

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
 ],
 imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
