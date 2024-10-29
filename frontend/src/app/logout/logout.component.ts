import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../services/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit  {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) {}

  ngOnInit(): void {
    this.hardcodedAuthenticationService.logout();
  }

}
