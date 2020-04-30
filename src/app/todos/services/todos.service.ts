import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Todo } from '@todosAPI/interfaces/todo.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodosService {
  private selectedSubject = new BehaviorSubject<Todo>(null);
  todoSelectedAction$ = this.selectedSubject.asObservable();

  private URL_API = 'http://localhost:4201/api/todos';

  constructor(private http: HttpClient) {}

  changeTodoSelected(todo: Todo) {
    this.selectedSubject.next(todo);
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.URL_API);
  }

  addTodo(todo: Todo): Observable<Todo> {
    const objTodo: Todo = {
      name: todo.name,
      completed: false,
    };
    return this.http.post<any>(this.URL_API, objTodo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const objTodo: Todo = {
      name: todo.name,
      completed: todo.completed,
    };
    return this.http.put<Todo>(`${this.URL_API}/${todo._id}`, objTodo);
  }

  deleteTodo(id: string): Observable<{}> {
    return this.http.delete<Todo>(`${this.URL_API}/${id}`);
  }
}
