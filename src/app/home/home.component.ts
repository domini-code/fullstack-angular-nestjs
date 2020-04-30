import { TodosService } from '@todosFE/services/todos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private todosSvc: TodosService) {}

  showForm() {
    const objTodo = {
      name: '',
      completed: false,
    };
    this.todosSvc.changeTodoSelected(objTodo);
  }
}
