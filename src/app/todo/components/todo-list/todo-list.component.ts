import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Todo } from '@todosAPI/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onEdit(): void {
    // this.store.dispatch(new SetSelectedTodo(todo));
  }
}
