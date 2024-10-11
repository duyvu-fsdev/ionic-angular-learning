import { Injectable, signal, effect } from '@angular/core';

@Injectable({
 providedIn: 'root',
})
export class LoadingService {
 isLoading = signal(false);

 constructor() {
  effect(() => {
   if (this.isLoading()) {
    console.log('Loading started...');
   } else {
    console.log('Loading ended...');
   }
  });
 }

 startLoading() {
  this.isLoading.set(true);
 }

 stopLoading() {
  this.isLoading.set(false);
 }
}
