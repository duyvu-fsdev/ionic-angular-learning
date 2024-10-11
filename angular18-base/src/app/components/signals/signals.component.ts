import { Component, computed, effect, signal, untracked } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { MenuService } from '../../services/menu.service';
import _ from 'lodash';

@Component({
 selector: 'app-signals',
 templateUrl: './signals.component.html',
 styleUrls: ['./signals.component.scss', '../common.scss'],
})
export class SignalsComponent {
 constructor(public menuService: MenuService, public loadingService: LoadingService) {
  effect(() => {
   this.mess1 = `The current value is: ${this.boolean()}`;
  });
  effect(() => {
   this.mess2 = `The current value1 is ${this.val1()} and untracked value2 (${untracked(this.val2)}) `;
  });
 }

 counter = signal(0);
 increment() {
  this.counter.set(this.counter() + 1);
 }
 decrement() {
  this.counter.set(this.counter() - 1);
 }
 ngOnInit(): void {
  this.menuService.fetchData();
 }

 //Computed
 value1 = signal(5);
 value2 = signal(10);
 sum = computed(() => this.value1() + this.value2());

 incrementValues() {
  this.value1.update((val) => val + 1);
  this.value2.update((val) => val + 1);
 }

 value = signal(1);
 showResult = signal(true);
 square = computed(() => {
  if (this.showResult()) {
   return `Square  of ${this.value()} is ${this.value() * this.value()}.`;
  } else {
   return 'Results have been hidden';
  }
 });

 incrementValue() {
  this.value.update((val) => val + 1);
 }
 toggleShow() {
  this.showResult.update((s) => !s);
 }
 // effect
 mess1 = '';
 mess2 = '';
 boolean = signal(false);
 toggleBoolean() {
  this.boolean.update((b) => !b);
 }

 load() {
  this.loadingService.startLoading();
 }
 stop() {
  this.loadingService.stopLoading();
 }

 val1 = signal(1);
 val2 = signal(3);
 sum2 = computed(() => {
  return this.val1() + this.val2();
 });

 incrementVal1() {
  this.val1.update((val) => val + 1);
 }
 incrementVal2() {
  this.val2.update((val) => val + 1);
 }
}
