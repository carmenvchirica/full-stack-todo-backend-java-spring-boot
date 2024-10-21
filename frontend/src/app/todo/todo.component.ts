import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  id: number = 0;
  todo: Todo = new Todo(this.id, '', false, new Date());

  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute, private router: Router
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    if(this.id != -1) {
      this.todoService.retrieveTodoById('carmen', this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo() {

    if(this.id === -1) {
      // create 
      this.todoService.createTodo('carmen', this.todo).subscribe(
        data => {
          this.router.navigate(['todos']);          
        }
      );

    } else {

      this.todoService.updateTodoById('carmen', this.id, this.todo).subscribe(
        data => {
          this.router.navigate(['todos']); 
        }
      );
    }
  }

}
