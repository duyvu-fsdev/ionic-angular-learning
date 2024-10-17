import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfor } from '../models/user';

@Injectable({
 providedIn: 'root',
})
export class AuthService {
 API_SERVER = 'http://localhost:8080/api/user';
 httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

 constructor(private httpClient: HttpClient) {}

 register(payload: any) {
  const url = `${this.API_SERVER}/register`;
  return this.httpClient.post<any>(url, payload, this.httpOptions);
 }

 login(loginInfor: LoginInfor) {
  const url = `${this.API_SERVER}/login`;
  return this.httpClient.post<any>(url, loginInfor, this.httpOptions);
 }
}
