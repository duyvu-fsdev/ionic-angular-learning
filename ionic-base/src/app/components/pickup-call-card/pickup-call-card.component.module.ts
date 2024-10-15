import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from './pickup-call-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
 declarations: [PickupCallCardComponent],
 imports: [CommonModule, IonicModule],
 exports: [PickupCallCardComponent],
 providers: [],
})
export class PickupCallCardModule {}
