import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrl: './error.component.css',
    standalone: true
})
export class ErrorComponent implements OnInit {
  errorMessage = 'An Error Occured! Contact Support at *** - ***';

  constructor() {}

  ngOnInit(): void {
    
  }

}
