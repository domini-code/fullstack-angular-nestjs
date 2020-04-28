import { TodosService } from '@todosAPI/todos.services';
import { TodosController } from '@todosAPI/todos.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
