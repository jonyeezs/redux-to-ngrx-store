import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromStore from '../app/store';

@Injectable()
export class HasTodosRouterGuard implements CanActivate {
  constructor(private store: Store<fromStore.AppState>) {
  }

  canActivate(): Observable<boolean> {
    return this.checkStore()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
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
