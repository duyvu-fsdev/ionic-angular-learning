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
 ],
 imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
