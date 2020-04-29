import { Todo } from '@todosAPI/interfaces/todo.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public todoForm: FormGroup;
  public editTodo = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  onSave(form: Todo) {
    if (this.editTodo) {
      // TODO: services UpdateTodo;
    } else {
      // TODO: services AddTodo;
    }
  }

  private createForm() {
    this.todoForm = this.fb.group({
      _id: [''],
      name: [''],
      completed: [false],
    });
  }

  private refillForm(todo: Todo) {
    this.todoForm.patchValue({
      _id: todo._id,
      title: todo.name,
    });
  }
}
