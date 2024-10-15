import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  private userLoggedInSubject = new BehaviorSubject<boolean>(this.isUserLoggedIn());
  isUserLoggedIn$ = this.userLoggedInSubject.asObservable();

  constructor() { }

  authenticate(username: string, password: string) {

    if(username==="carmen" && password === 'dummy') {
      console.log(this.isUserLoggedIn());

      // Save data to sessionStorage
      sessionStorage.setItem('authenticatedUser', username);
      this.userLoggedInSubject.next(true);  // Notify about login
      return true;
    } else {

      return false;
    }
  }

  isUserLoggedIn() {
    // Get saved data from sessionStorage
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    this.userLoggedInSubject.next(false);  // Notify about logout
  }
} 
