import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { PickupCallCardModule } from 'src/app/components/pickup-call-card/pickup-call-card.component.module';
import { HomePage } from './home.page';

@NgModule({
 imports: [
  CommonModule,
  FormsModule,
  IonicModule,
  HomePageRoutingModule,
  PickupCallCardModule,
 ],
 declarations: [HomePage],
})
export class HomePageModule {}
