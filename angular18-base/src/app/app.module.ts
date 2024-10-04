import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';
import { DetailsComponent } from './components/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModelBindingComponent } from './components/ng-model-binding/ng-model-binding.component';

@NgModule({
 declarations: [AppComponent, HomeComponent, HousingLocationComponent, DetailsComponent, NgModelBindingComponent],
 imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
