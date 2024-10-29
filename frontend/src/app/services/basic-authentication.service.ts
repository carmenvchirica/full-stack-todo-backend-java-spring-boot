import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export class AuthenticationBean {
  constructor(public message: string) { }

}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  private userLoggedInSubject = new BehaviorSubject<boolean>(this.isUserLoggedIn());
  isUserLoggedIn$ = this.userLoggedInSubject.asObservable();

  constructor(private http: HttpClient) { }

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

  executeBasicAuthService(username: string, password: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers});
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
