import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuModule } from '../menu/menu.module';
import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';

@NgModule({
 declarations: [PerformanceComponent],
 imports: [CommonModule, PerformanceRoutingModule, MenuModule, NgOptimizedImage],
})
export class PerformanceModule {}
