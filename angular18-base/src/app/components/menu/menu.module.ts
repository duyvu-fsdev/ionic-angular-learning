import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { CustomPipesModule } from '../../Pipes/custompipes.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
 declarations: [MenuComponent],
 imports: [CommonModule, CustomPipesModule, ReactiveFormsModule],
 exports: [MenuComponent],
 providers: [],
})
export class MenuModule {}
