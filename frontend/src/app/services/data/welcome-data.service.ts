
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) { }

}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldService() {
    let basicAuthString = this.createBasicAuthHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthString
    });

    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-bean', {headers});
  }


  executeHelloWorldServiceWithPathVariable(name: string) {
    let basicAuthString = this.createBasicAuthHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthString
    });

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-bean/path-variable/${name}`, {headers});
  }

  createBasicAuthHttpHeader() {
    let username = 'carmen'
    let password = '1234'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
