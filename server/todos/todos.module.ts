import { TodosService } from '@todosAPI/todos.services';
import { TodosController } from '@todosAPI/todos.controller';
import { Module } from '@nestjs/common';
import { TodoSchema } from '@todosAPI/schemas/todo.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
