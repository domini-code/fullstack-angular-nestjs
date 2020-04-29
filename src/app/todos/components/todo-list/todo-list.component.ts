import { TodosService } from '@todosFE/services/todos.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Todo } from '@todosAPI/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private todosSvc: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todosSvc.getAll();
  }

  onEdit(todo: Todo): void {
    console.log('Edit->', todo);
  }
}
