import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor() { }

  register(email: string, password: string): void {
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): { email: string, password: string } | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
