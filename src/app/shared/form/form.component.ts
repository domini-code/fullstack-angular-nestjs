import { TodosService } from '@todo';
import { Todo } from '@todosAPI/interfaces/todo.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public todo: Todo;

  constructor(public todosSvc: TodosService) {}

  onSave(todo: Todo) {
    if (todo._id) {
      this.todosSvc.updateTodo(todo).subscribe((res) => {
        console.log('UpdateTodo-->', res);
      });
    } else {
      this.todosSvc.addTodo(todo).subscribe((res) => {
        console.log('AddTodo-> ', res);
      });
    }
    this.setTodoSeletected();
  }

  setTodoSeletected() {
    this.todosSvc.changeTodoSelected(null);
  }
}
