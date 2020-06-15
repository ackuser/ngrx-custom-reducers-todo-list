import { createSelector } from '@ngrx/store';
import { TodosState } from "./reducer";

export interface AppState {
  todosSliceState: TodosState;
}

export const selectTodosSliceState = (state: AppState) => state.todosSliceState;
 
export const selectTodos = createSelector(
  selectTodosSliceState,
  (state: TodosState) => state.todos
);