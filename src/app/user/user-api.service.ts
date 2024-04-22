import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
 
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8000';  // 确认这是你的服务器地址

  // 用户注册
  signup(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/register`, { name, email, password });
  }

  // 用户登录
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, { email, password });
  }

  // 忘记密码
  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/forgot-password`, { email });
  }

  // 重置密码
  resetPassword(passwordResetData: { token: string; newPassword: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/reset-password`, passwordResetData);
  }
}