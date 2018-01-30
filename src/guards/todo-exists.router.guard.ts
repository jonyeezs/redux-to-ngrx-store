import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap, filter, take, switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromStore from '../app/store';
import { Todo } from '../app/models/Todo';

@Injectable()
export class TodoExistsRouterGuard implements CanActivate {

    constructor(private store: Store<fromStore.AppState>) {}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
      return this.checkStore()
        .pipe(
          switchMap(() => {
            const id = route.params.todoId;
            return this.hasTodo(id);
          }),
          catchError(() => of(false))
        );
    }

    hasTodo(id: string): Observable<boolean> {
      return this.store.select(fromStore.getTodos)
        .pipe(
          map((todos) => todos.some((todo: Todo) => todo.id === id))
        );
    }

    checkStore(): Observable<boolean> {
      return this.store.select(fromStore.getTodosLoaded)
        .pipe(
          tap(loaded => {
            if (!loaded) {
              this.store.dispatch(new fromStore.LoadTodo());
            }
          }),
          filter(loaded => loaded), // wait till the todos are loaded
          take(1) // just take that first change and stop the stream
        );
    }
}
