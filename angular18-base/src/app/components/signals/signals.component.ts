import { Component, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuService } from '../../services/menu.service';

@Component({
 selector: 'app-signals',
 templateUrl: './signals.component.html',
 styleUrls: ['./signals.component.scss', '../common.scss'],
})
export class SignalsComponent {
 //use rxjs
 private counterSubject = new BehaviorSubject<number>(0);
 counter: number = 0;
 constructor(public menuService: MenuService) {
  this.counterSubject.subscribe((value) => {
   this.counter = value;
  });
 }
 increment() {
  this.counterSubject.next(this.counterSubject.value + 1);
 }
 decrement() {
  this.counterSubject.next(this.counterSubject.value - 1);
 }

 // use signal
 counter2 = signal(0);
 increment2() {
  this.counter2.set(this.counter2() + 1);
 }
 decrement2() {
  this.counter2.set(this.counter2() - 1);
 }
 //

 ngOnInit(): void {
  this.menuService.fetchData();
 }
}
