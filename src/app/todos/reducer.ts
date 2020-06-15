<<<<<<< HEAD
import { createReducer, on } from '@ngrx/store';
import { Todo } from './interfaces';
import { Add, Remove, Toggle } from './actions';
import { uuid } from 'uuidv4';

const initialState: Array<Todo> = [];

export const todoReducer = createReducer(initialState,
  on(Add, (state, action) => ([...state, { id: uuid(), text: action.text, todo: true }])),
  on(Remove, (state, action) => state.filter(i => i.id !== action.id)),
  on(Toggle, (state, action) => state.map(i => i.id === action.id ? {...i, todo: !i.todo} : i)),
)
=======
import { createReducer, on, Action } from "@ngrx/store";
import { Todo } from "./interfaces";
import { Add, Remove, Toggle } from "./actions";
import { uuid } from "uuidv4";

export interface TodosState {
  todos: Array<Todo>;
}

export const initialState: TodosState = {
  todos: [{ id: "_123abc", text: "don't know", todo: true }]
};

export const _todoReducer = createReducer(
  initialState,
  on(Add, (state, { text }) => ({
    ...state,
    todos: [...state.todos, { id: uuid(), text: text, todo: true } as Todo]
  })),
  on(Remove, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(i => i.id !== id)
  })),
  on(Toggle, (state, { id }) => ({
    ...state,
    todos: state.todos.map(i => (i.id === id ? { ...i, todo: !i.todo } : i))
  }))
);


export function todoReducer(state: TodosState | undefined, action: Action) {
  return _todoReducer(state, action);
}
>>>>>>> d331ba3... Key Concepts
