import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './reducer';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';
import { PushPipe, LetDirective } from '@ngrx/component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StoreModule.forFeature(fromTodos.featureKey, fromTodos.todoReducer)
  ],
  declarations: [
    TodoListComponent,
    TodoComponent,
    PushPipe,
    LetDirective
  ],
  exports: [
    TodoListComponent
  ]

})
export class TodoModule { }