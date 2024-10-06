import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
 selector: 'app-pipes',
 templateUrl: './pipes.component.html',
 styleUrl: './pipes.component.scss',
})
export class PipesComponent {
 //datePipe
 date = new Date();

 //CurrencyPipe
 currencyValue!: number;
 currencyCode!: string;

 //DecimalPipe
 decimalValue!: number;

 //PercentPipe
 percentValue!: number;
 //jsonPipe
 json = {
  name: 'John',
  age: 30,
  address: {
   city: 'New York',
   country: 'USA',
  },
 };

 //asyncPipe
 ///observablesAsyncPipe
 time = new Observable<string>((observer: Observer<string>) => {
  setInterval(() => observer.next(new Date().toString()), 1000);
 });
 ///promisAsynsPipe
 countdown$ = 5;
 countdown!: Promise<number>;
 supprise!: Promise<string>;
 onClick() {
  this.supprise = new Promise<string>((resolve) => {
   setTimeout(() => {
    resolve('Supprise 🎉🎉');
   }, 5000);
  });
  this.countdown = new Promise<number>((resolve) => {
   const interval = setInterval(() => {
    this.countdown$ -= 1;
    if (this.countdown$ <= 0) {
     clearInterval(interval);
     this.countdown$ = 5;
     resolve(this.countdown$);
    }
   }, 1000);
  });
 }
 //I18nPluralPipe

 I18nPluralPipe: number = 0;
 messageMapping: { [key: string]: string } = {
  '=0': 'No messages.',
  '=1': 'One message.',
  other: '# messages.',
 };

 //I18nSelectPipe

 gender = 'male';
 genderMapping: { [key: string]: string } = {
  male: 'He is a man.',
  female: 'She is a woman.',
  other: 'They are non-binary.',
 };
}
