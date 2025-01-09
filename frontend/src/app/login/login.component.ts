import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Added
import { BasicAuthenticationService } from '../services/basic-authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone: true,
    imports: [NgIf, FormsModule],
})
export class LoginComponent implements OnInit {

  username = 'carmen';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router, 
    private basicAuthenticationService: BasicAuthenticationService) {}

  ngOnInit() {
    
  }

  handleBasicAuthLogin() {
    console.log('clicked');
    console.log('username=', this.username);
    console.log('password=', this.password);

    this.basicAuthenticationService.executeBasicAuthService(this.username, this.password)
    .subscribe(
      data => {
        console.log('data = ', data);
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
    }, 
    
    error => {
      console.log(error);
      this.invalidLogin = true;

    })
  }
  
  
}