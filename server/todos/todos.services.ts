import { Injectable } from '@nestjs/common';
import { Todo } from '@todosAPI/interfaces/todo.interface';
import { CreateTodoDto } from '@todosAPI/dto/create-todo.dto';

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = [];

  async findAll(): Promise<Todo[]> {
    return this.todos;
  }

  async create(todoDto: CreateTodoDto): Promise<Todo> {
    return todoDto;
  }

  async update(id: number, todo: CreateTodoDto): Promise<Todo> {
    return todo;
  }

  async delete(id: number): Promise<{}> {
    return id;
  }
}
