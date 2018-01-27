import * as fromTodos from '../actions/todos.action';

import { Todo } from '../../models/Todo';

// Reducer's state
export interface TodosState {
    // both load flags are used for spinners
    // no more putting the state on the controller but all managed
    // through the store's reducers
    loaded: boolean;
    loading: boolean;
    data: Todo[];
}

export const initialState: TodosState = {
    loaded: false,
    loading: false,
    data: [{
      id: '1',
      label: 'Add a todo',
      complete: false,
      tags: ['welcome', 'getting started']
    }]
};

// Each reducer manages a subset of data in a store
// In this case this reduce is to only handle todo.
// It's good to have a named function for better stack trace.
export function TodosReducer(
  state = initialState,
  action: fromTodos.TodosAction): TodosState {
  switch (action.type) {
    case fromTodos.LOAD_TODOS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    // case fromTodos.LOAD_TODOS_SUCCESS: {
    //   const data = [...state.data, ...action.payload];
    //   return {
    //     ...state,
    //     loading: false,
    //     loaded: true,
    //     data
    //   };
    // }
    // case fromTodos.LOAD_TODOS_FAIL: {
    //   const data = state.data.filter(todo => todo.label !== action.payload.label);
    //   return {
    //     ...state,
    //     loading: false,
    //     loaded: false
    //   };
    // }
    case fromTodos.CREATE_TODO: {
      const data = [...state.data, action.payload];
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }
  }

  return state;
}
