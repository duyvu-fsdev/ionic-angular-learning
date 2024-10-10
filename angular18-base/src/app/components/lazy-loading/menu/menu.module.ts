import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomPipesModule } from '../../../Pipes/custompipes.module';

@NgModule({
 declarations: [MenuComponent],
 imports: [CommonModule, MenuRoutingModule, ReactiveFormsModule, CustomPipesModule],
})
export class MenuModule {}
