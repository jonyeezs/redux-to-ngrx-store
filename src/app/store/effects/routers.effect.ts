import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Effect, Actions } from '@ngrx/effects';
import * as RouterActions from '../actions/routers.action';

import { tap, map } from 'rxjs/operators';

@Injectable()
export class RouterEffects {

  constructor(private actions$: Actions, private router: Router, private location: Location) {}

  @Effect({ dispatch: false})
  navigate$ = this.actions$
    .ofType(RouterActions.GO)
    .pipe(
        map((action: RouterActions.Go) => action.payload),
        tap(({path, query: queryParams, extras}) => {
          this.router.navigate(path, {queryParams, ...extras});
        })
    )
}
