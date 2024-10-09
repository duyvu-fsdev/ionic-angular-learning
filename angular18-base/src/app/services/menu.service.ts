import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
 providedIn: 'root',
})
export class MenuService {
 private menusSubject = new BehaviorSubject<any>(null);
 public menus$ = this.menusSubject.asObservable();

 private url = 'http://localhost:8000/api/menu';
 private httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
 };

 constructor(private httpClient: HttpClient) {}

 getMenus() {
  return this.httpClient.get(this.url, this.httpOptions);
 }

 async initMenus() {
  try {
   const da = await lastValueFrom(this.getMenus());
   this.menusSubject.next(da);
  } catch (error) {
   console.log({ error });
  }
 }

 addMenu(data: any) {
  return this.httpClient.post(this.url, data, this.httpOptions);
 }
 updateMenu(data: any, id: any) {
  return this.httpClient.put(`${this.url}/${id}`, data, this.httpOptions);
 }
 deleteMenu(id: any) {
  return this.httpClient.delete(`${this.url}/${id}`, this.httpOptions);
 }
}
