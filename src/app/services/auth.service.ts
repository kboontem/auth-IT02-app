import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'https://localhost:7154/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  register(username: string, password: string, confirmPassword: string) {
    return this.http.post(`${this.api}/register`, { username, password, confirmPassword });
  }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.api}/login`, { username, password });
  }

  saveToken(token: string) {
    localStorage.setItem('jwt', token);
  }

  getUsername(): string {
    const token = localStorage.getItem('jwt');
    if (!token) return '';
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload?.unique_name || '';
  }
}