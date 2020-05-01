import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject, merge, throwError } from 'rxjs';
import { Todo } from '@todosAPI/interfaces/todo.interface';
import { HttpClient } from '@angular/common/http';
import {
  catchError,
  tap,
  map,
  switchMap,
  filter,
  shareReplay,
  scan,
} from 'rxjs/operators';
@Injectable()
export class TodosService {
  private selectedSubject = new BehaviorSubject<Todo>(null);
  todoSelectedAction$ = this.selectedSubject.asObservable();

  // private todoInsertedSubject = new Subject<Todo>();
  // todoInsertedAction$ = this.todoInsertedSubject.asObservable();

  private URL_API = 'http://localhost:4201/api/todos';

  // allTodos$ = this.http.get<Todo[]>(this.URL_API).pipe(
  //   tap((response) => console.log(JSON.stringify(response))),
  //   shareReplay(1),
  //   catchError(this.handleError)
  // );

  // todosWithNew$ = merge(this.allTodos$, this.todoSelectedAction$).pipe(
  //   scan((acc: Todo[], value: Todo) => [...acc, value])
  // );
  private todoInsertedSubject = new Subject<Todo>();
  contactInsertedActions$ = this.todoInsertedSubject.asObservable();

  public todos$ = this.http.get<Todo[]>(this.URL_API).pipe(
    tap((todo) => console.log('Todos: ', JSON.stringify(todo))),
    catchError(this.handleError)
  );
  public todosWithAdd$ = merge(this.todos$, this.contactInsertedActions$).pipe(
    scan((acc: Todo[], value: Todo) => [...acc, value])
  );
  // newTodo(newTodo?: Todo) {
  //   this.todoInsertedSubject.next(newTodo);
  // }

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
    this.http.post<Todo>(this.URL_API, objTodo).subscribe((res: Todo) => {
      this.todoInsertedSubject.next(res);
    });
    return;
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

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
