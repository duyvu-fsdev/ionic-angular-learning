import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LazyLoadingComponent } from './lazy-loading.component';
import { MenuModule } from '../menu/menu.module';
import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';

@NgModule({
 declarations: [LazyLoadingComponent],
 imports: [CommonModule, LazyLoadingRoutingModule, MenuModule],
 exports: [LazyLoadingComponent],
})
export class LazyLoadingModule {}
