
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  register(student: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/students/register`, student);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/students/login`, credentials);
  }

  getProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/students/profile`);
  }

  updatePassword(data: any, newPassword: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/students/password`, data);
  }
}
