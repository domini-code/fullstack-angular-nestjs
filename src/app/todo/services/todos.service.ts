import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '@todosAPI/interfaces/todo.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodosService {
  private URL_API = 'http://localhost:4200/api/todos';
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.URL_API);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.URL_API, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.URL_API}/${todo._id}`, todo);
  }

  deleteTodo(id: string): Observable<{}> {
    return this.http.delete<Todo>(`${this.URL_API}/${id}`);
  }
}
