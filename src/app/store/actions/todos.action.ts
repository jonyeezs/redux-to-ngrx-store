import { Action } from '@ngrx/store';

import { Todo } from '../../models/Todo';
import { Tag } from '../../models/Tag';
// How to write a good action constants
//   v-- the namespace    v-- this is the benefit of a human, so verbosity is fine
// [State involve] The action explicitly
export const LOAD_TODOS = '[Todos] Load Todos';
// export const LOAD_TODOS_FAIL = '[Todos] Fail to Load Todos';
// export const LOAD_TODOS_SUCCESS = '[Todos] Successfully Load Todos';

export const CREATE_TODO = '[Todos] Create Todos';
// export const CREATE_TODO_FAIL = '[Todos] Fail to Create Todos';
// export const CREATE_TODO_SUCCESS = '[Todos] Successfully Create Todos';

export const UPDATE_TODO = '[Todos] Update Todo';

export const DELETE_TODO = '[Todos] Delete Todos';
// export const DELETE_TODO_FAIL = '[Todos] Fail to Delete Todos';
// export const DELETE_TODO_SUCCESS = '[Todos] Successfully Delete Todos';

// Don't need to remember the type
// Instantiating the class, gives you the information needed to create a valid object.
export class LoadTodo implements Action {
  readonly type = LOAD_TODOS;
}

// export class LoadTodoFail implements Action {
//   readonly type = LOAD_TODOS_FAIL;
//   constructor(public payload: any) {}
// }
//
// export class LoadTodoSuccess implements Action {
//   readonly type = LOAD_TODOS_SUCCESS;
//   constructor(public payload: Todo[]) {}
// }

export class CreateTodo implements Action {
  readonly type = CREATE_TODO;
  constructor(public payload: Todo) {}
}

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;
  constructor(public payload: Todo) {}
}

// export class CreateTodoFail implements Action {
//   readonly type = CREATE_TODO_FAIL;
//   constructor(public payload: any) {}
// }
//
// export class CreateTodoSuccess implements Action {
//   readonly type = LOAD_TODOS_SUCCESS;
//   constructor(public payload: Todo) {}
// }

export class DeleteTodo implements Action {
  readonly type = CREATE_TODO;
  constructor(public payload: Todo) {}
}

// export class DeleteTodoFail implements Action {
//   readonly type = CREATE_TODO_FAIL;
//   constructor(public payload: any) {}
// }
//
// export class DeleteTodoSuccess implements Action {
//   readonly type = LOAD_TODOS_SUCCESS;
//   constructor(public payload: Todo[]) {}
// }

// action types. Will be used for reducers DI
export type TodosAction = LoadTodo | // LoadTodoFail | LoadTodoSuccess |
                          CreateTodo | // | CreateTodoFail | CreateTodoSuccess;
                          UpdateTodo |
                          DeleteTodo;
