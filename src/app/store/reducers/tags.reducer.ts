import * as fromTags from '../actions/tags.action';

import { Tag } from '../../models/Tag';

// subset state
export interface TagsState {
  loaded: boolean;
  loading: boolean;
  data: Tag[];
}

const initialState: TagsState = {
    loaded: false,
    loading: false,
    data: [{label: 'welcome'}, {label: 'getting started'}, {label: 'tagged!'}]
};

export function TagsReducer(
  state = initialState,
  action: fromTags.TagsAction): TagsState {
    switch (action.type) {
      case fromTags.LOAD_TAGS: {
        return {
          ...state,
          loading: true,
          loaded: false
        };
      }
      case fromTags.LOAD_TAGS_SUCCESS: {
        return {
          ...state,
          loading: false,
          loaded: true
        };
      }
      case fromTags.LOAD_TAGS_FAIL: {
        return {
          ...state,
          loading: false,
          loaded: false
        };
      }
    }
    // http://www.wisdomofjim.com/blog/ngrx-redux-gotcha-dont-forget-to-return-state-in-the-reducer-function
    return state;
  }
