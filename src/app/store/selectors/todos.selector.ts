import { createSelector } from '@ngrx/store';

import { AppState, getAppState } from '../reducers';
import * as fromTodos from '../reducers/todos.reducers';

// Create selectors to access data within a given state
// base todos state
export const getTodosState = createSelector(
  getAppState,
  (state: AppState) => state.todos);

export const getTodos = createSelector(
  getTodosState,
  (state: fromTodos.TodosState) => state.data);

export const getTodosLoading = createSelector(
  getTodosState,
  (state: fromTodos.TodosState) => state.loading);

export const getTodosLoaded = createSelector(
  getTodosState,
  (state: fromTodos.TodosState) => state.loaded);
