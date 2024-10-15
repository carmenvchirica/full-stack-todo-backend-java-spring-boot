import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';

export class Todo {
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe]

})
export class ListTodosComponent  implements OnInit {

  message = '';
  todos: Todo[] = [];

  constructor(private service: TodoDataService) {}

  ngOnInit() {
   this.service.retrieveAllTodos('carmen').subscribe(resp => this.todos = resp);
  }

  updateTodo(id: number) {

  }

  deleteTodo(id: number) {


    
  }

  addTodo() {

  }
}
