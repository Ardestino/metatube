import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const user = localStorage.getItem('user');
    if (user === "admin@metacube.com.mx") {
      return true;
    } else {
      return false;
    }
  }

  public Authenticate(user, password) {
    localStorage.setItem('user',user);
  }

  public LogOut() {
    localStorage.removeItem('user');
  }
}
