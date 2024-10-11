import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustompipesComponent } from './components/custompipes/custompipes.component';
import { DetailsComponent } from './components/details/details.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { NgModelBindingComponent } from './components/ng-model-binding/ng-model-binding.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ServicesDiComponent } from './components/services-di/services-di.component';
import { HighLightDirective } from './Directives/high-light.directive';
import { CustomPipesModule } from './Pipes/custompipes.module';

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
  CustompipesComponent,
  ServicesDiComponent,
  HttpClientComponent,
 ],
 imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule, FormsModule, CustomPipesModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
