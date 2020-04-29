import { Injectable } from '@nestjs/common';
import { Todo } from '@todosAPI/interfaces/todo.interface';
import { CreateTodoDto } from '@todosAPI/dto/create-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<any>) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find();
  }

  async create(todoDto: CreateTodoDto): Promise<Todo> {
    const createTodo = new this.todoModel(todoDto);
    return createTodo.save();
  }

  async update(_id: number, todoDto: CreateTodoDto): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(_id, todoDto, {
      new: true,
    });
  }

  async delete(_id: number): Promise<{}> {
    return this.todoModel.findByIdAndRemove(_id);
  }
}
