import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../interfaces';
import { Store } from '@ngrx/store';
import { AppState, selectTodos } from '../selector';
import { Add, Remove, Toggle } from '../actions';
import { uuid } from 'uuidv4';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]>;
  newTodoText: string = "";

  constructor(private store: Store<AppState>, cdRef: ChangeDetectorRef) {
    // LComponentView
    // console.log((cdRef as any)._view);
  }

  ngOnInit() {
    this.todos$ = this.store.select(selectTodos);

    // this.todos$ = of([{ id: "_123abc", text: "don't know 2", todo: true }]);

    // setInterval(() => {
    //   // debugger
    //   this.store.dispatch(AddSameAgainAndAgain());
    // }, 5000)

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