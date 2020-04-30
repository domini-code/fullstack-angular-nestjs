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
    this.todosSvc.changeTodoSelected(todo);
  }

  onDelete(todo: Todo): void {
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      const { _id } = todo;
      this.todosSvc.deleteTodo(_id).subscribe(() => {
        window.alert('Deleted!');
      });
    }
  }
}
