import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomAsyncPipe, CustomCurrencyPipe, CustomDatePipe, GmailGeneratePipe } from './custompipes.pipe';

@NgModule({
 declarations: [CustomDatePipe, GmailGeneratePipe, CustomAsyncPipe, CustomCurrencyPipe],
 imports: [CommonModule],
 exports: [CustomDatePipe, GmailGeneratePipe, CustomAsyncPipe, CustomCurrencyPipe],
 providers: [],
})
export class CustomPipesModule {}
