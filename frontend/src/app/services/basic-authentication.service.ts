import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';


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
    console.log(basicAuthHeaderString);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    let r = this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers})
      .pipe(map(
        data => {
          // Save data to sessionStorage
          sessionStorage.setItem('authenticatedUser', username);
          return data;
        }
      ));

    return r;
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
