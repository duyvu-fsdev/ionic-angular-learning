import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { CustomPipesModule } from '../../../Pipes/custompipes.module';

@NgModule({
 declarations: [DetailComponent],
 imports: [CommonModule, DetailRoutingModule, CustomPipesModule],
})
export class DetailModule {}
