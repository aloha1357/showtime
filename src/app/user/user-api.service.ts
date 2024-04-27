import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
 
  constructor(private http: HttpClient) { }
  private user: any = null;
  private baseUrl = 'http://localhost:8000';  // 确认这是你的服务器地址

  // 用户注册
  signup(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/register`, { name, email, password });
  }

  // 用户登录
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, { email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('authToken', response.token); // 假设响应中包含token
        this.user = response.user; // 假设响应中包含用户信息
        localStorage.setItem('user', JSON.stringify(this.user));
      })
    );
  }

    // 检查用户是否已登录
    checkLoginStatus() {
      const user = localStorage.getItem('user');
      if (user) {
        this.user = JSON.parse(user);
      }
    }

      // 用户注销
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.user = null;
  }

  // 获取当前用户
  getUser() {
    return this.user;
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }
  // 忘记密码
  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/forgot-password`, { email });
  }

  // 重置密码
  resetPassword(passwordResetData: { token: string; newPassword: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/reset-password`, passwordResetData);
  }
    // 提交新评论
    submitNewReview(movieId: string, reviewData: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/new`, { movieId, ...reviewData }, { headers: { Authorization: `Bearer ${this.getAuthToken()}` } });
    }

      // 获取存储的AuthToken
  private getAuthToken(): string {
    // 这里应该从某处获取存储的Token，例如localStorage
    return localStorage.getItem('authToken') || '';
  }
}