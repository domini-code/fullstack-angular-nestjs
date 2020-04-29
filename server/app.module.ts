import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { TodosModule } from '@todosAPI/todos.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/fullStack/browser'),
    }),
    MongooseModule.forRoot(`mongodb://localhost:27017/demo_fullstack`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    TodosModule,
  ],
})
export class AppModule {}
