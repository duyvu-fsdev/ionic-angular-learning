import { Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Pipe({
 name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
 transform(value: Date | string, reverse?: boolean): string {
  let time: Date;

  if (!value) return '';
  if (value instanceof Date) {
   time = value;
  } else {
   time = new Date(value);
  }
  if (!reverse)
   return (
    time.getFullYear() +
    '/' +
    (() => {
     if (time.getMonth() + 1 > 9) return time.getMonth() + 1;
     else return `0${time.getMonth() + 1}`;
    })() +
    '/' +
    (() => {
     if (time.getDate() > 9) return time.getDate();
     else return `0${time.getDate()}`;
    })() +
    '  ' +
    (() => {
     if (time.getHours() > 9) return time.getHours();
     else return `0${time.getHours()}`;
    })() +
    ':' +
    (() => {
     if (time.getMinutes() > 9) return time.getMinutes();
     else return `0${time.getMinutes()}`;
    })() +
    ':' +
    (() => {
     if (time.getSeconds() > 9) return time.getSeconds();
     else return `0${time.getSeconds()}`;
    })()
   );
  else
   return (
    (() => {
     if (time.getHours() > 9) return time.getHours();
     else return `0${time.getHours()}`;
    })() +
    ':' +
    (() => {
     if (time.getMinutes() > 9) return time.getMinutes();
     else return `0${time.getMinutes()}`;
    })() +
    ':' +
    (() => {
     if (time.getSeconds() > 9) return time.getSeconds();
     else return `0${time.getSeconds()}`;
    })() +
    '  ' +
    (() => {
     if (time.getDate() > 9) return time.getDate();
     else return `0${time.getDate()}`;
    })() +
    '/' +
    (() => {
     if (time.getMonth() + 1 > 9) return time.getMonth() + 1;
     else return `0${time.getMonth() + 1}`;
    })() +
    '/' +
    time.getFullYear()
   );
 }
}

@Pipe({
 name: 'gmailGenerate',
})
export class GmailGeneratePipe implements PipeTransform {
 transform(gmail: string): string {
  gmail = gmail.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  gmail = gmail.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  gmail = gmail.replace(/Ì|Í|Ị|Ỉ|Ĩ|ì|í|ị|ỉ|ĩ/g, 'i');
  gmail = gmail.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'O');
  gmail = gmail.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  gmail = gmail.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ|ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  gmail = gmail.replace(/Đ|đ/g, 'd');
  gmail = gmail.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
  gmail = gmail.replace(/\u02C6|\u0306|\u031B/g, '');
  gmail = gmail.replace(/!|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,| |\:|\;|\'|\"|\&|\#|\[|\]|~|\$|`|{|}|\||\\/g, '');
  gmail = gmail.toLocaleLowerCase();
  if (gmail.includes('@')) {
   const [prefix, domain] = gmail.split('@');
   gmail = `${prefix}@gmail.com`;
  }
  return gmail;
 }
}

@Pipe({ name: 'customAsync', pure: false })
export class CustomAsyncPipe implements PipeTransform {
 private value: any = null;
 private subscription: Subscription | null = null;
 transform(observable: Observable<any>): any {
  if (!this.subscription) {
   this.subscription = observable.subscribe({ next: (val) => (this.value = val) });
  }
  return this.value;
 }
 ngOnDestroy() {
  if (this.subscription) {
   this.subscription.unsubscribe();
  }
 }
}

@Pipe({ name: 'customCurrency' })
export class CustomCurrencyPipe implements PipeTransform {
 transform(valueInput: number, currencyCode?: string): string {
  const value = !valueInput || isNaN(valueInput) ? 0 : valueInput;
  return `${value.toLocaleString('vi-VN', { style: 'currency', currency: currencyCode || 'VND' })}`;
 }
}
