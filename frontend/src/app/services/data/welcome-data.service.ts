
import { HttpClient } from '@angular/common/http';
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
    let data = this.http.get<HelloWorldBean>('http://localhost:8080/hello-bean');
    console.log('data=', data);
    return data;
  }


  executeHelloWorldServiceWithPathVariable(name: string) {
    let data = this.http.get<HelloWorldBean>(`http://localhost:8080/hello-bean/path-variable/${name}`);
    console.log('data=', data);
    return data;
  }
}
