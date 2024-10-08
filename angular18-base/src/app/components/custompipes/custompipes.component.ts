import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
 selector: 'app-custompipes',
 templateUrl: './custompipes.component.html',
 styleUrls: ['./custompipes.component.scss', '../common.scss'],
})
export class CustompipesComponent {
 date = new Date();
 email = '';

 timeObservable: Observable<string>;
 constructor() {
  this.timeObservable = interval(1000).pipe(map(() => new Date().toLocaleTimeString()));
 }
}
