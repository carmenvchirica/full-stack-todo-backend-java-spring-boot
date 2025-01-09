import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicAuthenticationService } from '../services/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  standalone: true,
  imports: [NgIf, RouterLink]
})
export class MenuComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(public basicAuthenticationService: BasicAuthenticationService) {
   
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.basicAuthenticationService.isUserLoggedIn();

    // Subscribe to the login status observable to update the menu
    this.basicAuthenticationService.isUserLoggedIn$.subscribe(isLoggedIn => {
      this.isUserLoggedIn = isLoggedIn;
    });
  }

}
