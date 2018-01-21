import { Action } from '@ngrx/store';

import { Todo } from '../../models/Todo';
import { Tag } from '../../models/Tag';
// How to write a good action constants
//   v-- the namespace    v-- this is the benefit of a human, so verbosity is fine
// [State involve] The action explicitly
export const LOAD_TODOS = '[Todos] Load Todos';
export const LOAD_TODOS_FAIL = '[Todos] Fail to Load Todos';
export const LOAD_TODOS_SUCCESS = '[Todos] Successfully Load Todos';

// Don't need to remember the type
// Instantiating the class, gives you the information needed to create a valid object.
export class LoadTodo implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadTodoFail implements Action {
  readonly type = LOAD_TODOS_FAIL;
  constructor(public payload: any) {}
}

export class LoadTodoSuccess implements Action {
  readonly type = LOAD_TODOS_SUCCESS;
  constructor(public payload: Todo[]) {}
}
// action types. Will be used for reducers DI
export type TodosAction = LoadTodo | LoadTodoFail | LoadTodoSuccess;
