import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.css',
    standalone: true,
    imports: [RouterLink, NgIf]
})
export class WelcomeComponent implements OnInit {

  name = '';
  message = 'Welcome to our amazing page!';
  welcomeMessageFromService: string = '';

  constructor(private route: ActivatedRoute, 
    private service: WelcomeDataService) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    console.log( this.name);
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response), 
      error => this.handleErrorResponse(error.error)
    );
  }

  getWelcomeMessageWithPathVariable() {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.welcomeMessageFromService = response.message
    );
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message;
  }
  
}
