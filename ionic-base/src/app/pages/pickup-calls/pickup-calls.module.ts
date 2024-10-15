import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupCallsPageRoutingModule } from './pickup-calls-routing.module';

import { PickupCallsPage } from './pickup-calls.page';
import { PickupCallCardModule } from 'src/app/components/pickup-call-card/pickup-call-card.component.module';

@NgModule({
 imports: [CommonModule, FormsModule, IonicModule, PickupCallsPageRoutingModule, PickupCallCardModule],
 declarations: [PickupCallsPage],
})
export class PickupCallsPageModule {}
