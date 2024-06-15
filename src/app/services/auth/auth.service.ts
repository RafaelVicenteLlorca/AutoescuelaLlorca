import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  register(email: string, password: string): void {
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): { email: string, password: string } | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }


  login(email: string, password: string): boolean {
    const user = this.getUser();
    if (user && user.email === email && user.password === password) {
      localStorage.setItem('userId', '1');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('userId') === '1';
  }

  logout(): void {
    localStorage.removeItem('userId');
  }

}   
