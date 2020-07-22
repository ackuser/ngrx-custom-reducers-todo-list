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
  // on(AddSameAgainAndAgain, (state) => ({
  //   ...state,
  //   todos: [...[{ id: "_123abc", text: "same task", todo: true }]]
  // })),
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

export const featureKey = 'todosSliceState';