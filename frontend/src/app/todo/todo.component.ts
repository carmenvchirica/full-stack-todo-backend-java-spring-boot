import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  id: number = 0;
  todo: Todo = new Todo(this.id, '', false, new Date());
  message = '';

  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todoService.retrieveTodoById('carmen', this.id).subscribe(
      data => this.todo = data
    );
  }

  saveTodo() {
    console.log(this.todo);
    this.todoService.updateTodoById('carmen', this.id, this.todo).subscribe(
      data => {
        console.log(data);
        this.message = `Updated Todo ${data.id} Successfuly`;
      }
    );
  }

}
