import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from './todos/interfaces';
import { Add, Remove, Toggle } from './todos/actions';
import { Observable } from 'rxjs';
import { AppState, selectTodos } from './todos/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  todos$: Observable<Todo[]>;
  newTodoText: string = "";

  constructor(private store: Store<AppState>) {
    this.todos$ = store.select(selectTodos);
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
