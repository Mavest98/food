import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string): boolean {
    if (email === 'admin@example.com' && password === 'admin') {
      localStorage.setItem('authToken', 'validToken');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
