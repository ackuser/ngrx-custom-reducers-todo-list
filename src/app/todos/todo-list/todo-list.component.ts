import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces';
import { Store } from '@ngrx/store';
import { AppState, selectTodos } from '../selector';
import { Add, Remove, Toggle } from '../actions';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]>;
  newTodoText: string = "";

  constructor(private store: Store<AppState>) {}
  
  ngOnInit() {
    this.todos$ = this.store.select(selectTodos);
  }


  addTodo() {
    this.store.dispatch(Add({ text: this.newTodoText || 'Untitled task' }));
    this.newTodoText = '';
  }

  removeTodo(id: string) {
    this.store.dispatch(Remove({ id }));
  }

  toggleTodo(id: string) {
    this.store.dispatch(Toggle({ id }));
  }


}
