import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from './todos/interfaces';
import { Add, Remove, Toggle } from './todos/actions';
import { Observable } from 'rxjs';

import { createReducer, on } from '@ngrx/store';
import { Todo } from './interfaces';
import { Add, Remove, Toggle } from './actions';
import { uuid } from 'uuidv4';

//------------------------interfaces.ts-------------------------\\

export interface Todo {
  id: string;
  text: string;
  todo: boolean;
}
//                           ...

//------------------------app.component.ts-------------------------\\

export class AppComponent {
  
  todos$: Observable<Todo[]>;
  newTodoText: string = "";

  constructor(private store: Store<{ todoState: Array<Todo> }>) {
//                           ...

//------------------------reducer.ts-------------------------\\

const initialState: Array<Todo> = [];

export const todoReducer = createReducer(initialState,
  on(Add, (state, action) => ([...state, { id: uuid(), text: action.text, todo: true }])),
  on(Remove, (state, action) => state.filter(i => i.id !== action.id)),
  on(Toggle, (state, action) => state.map(i => i.id === action.id ? {...i, todo: !i.todo} : i)),
)
//                           ...



