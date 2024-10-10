import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root',
})
export class CommonService {
 private messageSubject = new BehaviorSubject<string | null>(null);
 message$ = this.messageSubject.asObservable();

 sendMessage(message: string) {
  this.messageSubject.next(message);
  setTimeout(() => {
   this.messageSubject.next(null);
  }, 3000);
 }
 constructor() {}
}
