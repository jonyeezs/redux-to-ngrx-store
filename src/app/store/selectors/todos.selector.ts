import { createSelector } from '@ngrx/store';

import * as fromRouter from '../reducers/router.reducer';
import { AppState, getAppState } from '../reducers';
import * as fromTodos from '../reducers/todos.reducers';

import { Todo } from '../../models/Todo';

// Create selectors to access data within a given state
// base todos state
export const getTodosState = createSelector(
  getAppState,
  (state: AppState) => state.todos);

export const getTodos = createSelector(
  getTodosState,
  (state: fromTodos.TodosState) => state.data);

  export const getSelectedTodo = createSelector(
    getTodos,
    fromRouter.getRouterState,
    (todos: Todo[], router): Todo => {
      // How this evaluates to just Todo?
      // https://blog.mariusschulz.com/2016/05/25/the-andand-and-operator-in-javascript#using-logical-operators-with-non-boolean-values
      const found = router.state && todos.find(todo => todo.id === router.state.params.todoId);
      // Make sure you only work with immutable!
      return {...found};
    }
  );


export const getTodosLoading = createSelector(
  getTodosState,
  (state: fromTodos.TodosState) => state.loading);

export const getTodosLoaded = createSelector(
  getTodosState,
  (state: fromTodos.TodosState) => state.loaded);
