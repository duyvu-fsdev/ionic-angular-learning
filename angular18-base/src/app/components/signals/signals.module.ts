import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsComponent } from './signals.component';
import { CustomPipesModule } from '../../Pipes/custompipes.module';

@NgModule({
 declarations: [SignalsComponent],
 imports: [CommonModule, SignalsRoutingModule, CustomPipesModule],
})
export class SignalsModule {}
