import { HeaderComponent } from '@app/shared/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from '@app/shared/form/form.component';
import { TodoListComponent } from '@app/todos/components/todo-list/todo-list.component';
import { HomeRoutingModule } from '@app/home/home-routing.module';
import { HomeComponent } from '@app/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    TodoListComponent,
    FormComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class HomeModule {}
