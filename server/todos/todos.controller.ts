import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { TodosService } from '@todosAPI/todos.services';
import { CreateTodoDto } from '@todosAPI/dto/create-todo.dto';
import { Todo } from '@todosAPI/interfaces/todo.interface';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Post()
  async new(@Body() todoDto: CreateTodoDto): Promise<Todo> {
    return this.todosService.create(todoDto);
  }

  @Put(':id')
  async update(
    @Param('id') idTodo: number,
    @Body() todoDto: CreateTodoDto
  ): Promise<Todo> {
    return this.todosService.update(idTodo, todoDto);
  }

  @Delete(':id')
  async delete(@Param('id') idTodo: number): Promise<{}> {
    return this.todosService.delete(idTodo);
  }
}
