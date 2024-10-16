import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

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
export class ListTodosComponent implements OnInit {

  message = '';
  todos: Todo[] = [];

  constructor(private service: TodoDataService,
    private router: Router
  ) {}

  ngOnInit() {
   this.refreshTodos();
  }

  refreshTodos() {
   this.service.retrieveAllTodos('carmen').subscribe(resp => this.todos = resp);

  }

  updateTodo(id: number) {
    console.log('update todo ', id);
    this.router.navigate(['todos', id]);
  }

  deleteTodo(id: number) {

    console.log('delete todo ', id);

    this.service.deleteTodoById('carmen', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete Todo ${id} Successful!`;
        this.refreshTodos();
      }
    );
    
  }

  addTodo() {

  }
}
