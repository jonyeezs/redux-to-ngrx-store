import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, delay, catchError } from 'rxjs/operators';

import * as todosAction from '../actions/todos.action';
import { Todo } from '../../models/Todo';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions) {}

  // @Effect()
  // loadTodos = this.actions$.ofType(todosAction.LOAD_TODOS)
  //   .pipe(
  //     delay(1000),
  //     // imagine if this was getting data from an external source
  //     // map(() => {
  //     //   const guid = this.getRandomId();
  //     //   return new todosAction.LoadTodoSuccess([{
  //     //     id: guid, label: `#${guid} from my effect`,
  //     //     complete: false, tags: []
  //     //   }]);
  //     // }),
  //     catchError(error => of(new todosAction.LoadTodoFail(error)))
  //   );

  private getRandomId() {
    return Math.floor(Math.random() * Math.floor(100)).toString();
  }
}
