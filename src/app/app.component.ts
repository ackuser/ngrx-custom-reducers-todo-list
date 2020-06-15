import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from './todos/interfaces';
import { Add, Remove, Toggle } from './todos/actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todos$: Observable<Todo[]>;
  newTodoText: string = "";

  constructor(private store: Store<{ todoList: Array<Todo> }>) {
    this.todos$ = store.select(state => state.todoList);
  }

  addTodo() {
    this.store.dispatch(Add({ text: this.newTodoText || 'Untitled task' }));
    this.newTodoText = '';
  }

  removeTodo(id) {
    this.store.dispatch(Remove({ id }));
  }

  toggleTodo(id) {
    this.store.dispatch(Toggle({ id }));
  }
}
