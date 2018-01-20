import { RouterReducerState, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
// Although very similar to all the other reducers.
// We want to segregate this from the main state for now
// As the router needs only this state. Best to abstract it out for this cause.

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface RouterState {
  routerReducer: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<RouterState> = {
  routerReducer: routerReducer
};

// The generic type is to ensure this state can only access the router
export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerReducer');


// A Custom State Serializer
// Allows to take properties off a router snapshot (the state of router at that point of time)
// and add that to our reducer store
// This serializer will run everytime a new route is called
// So our state will always have the information of the latest route changes (RouterStateUrl)
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot) {

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      // get the last state
      state = state.firstChild;
    }
    const { params } = state;

    return {
      url: routerState.url,
      queryParams: routerState.root.queryParams,
      params: params
    };
  }
}
