import { Action } from '@ngrx/store';

import { Tag } from '../../models/Tag';

// action constants
export const LOAD_TAGS = '[Tags] Load all tags';
export const LOAD_TAGS_SUCCESS = '[Tags] Successfully load all tags';
export const LOAD_TAGS_FAIL = '[Tags] Failed to load all tags';

// create the actions

export class LoadTags implements Action {
  readonly type = LOAD_TAGS;
}

export class LoadTagsSuccess implements Action {
  readonly type = LOAD_TAGS_SUCCESS;
  constructor(public payload: Tag[]) {}
}

export class LoadTagsFail implements Action {
  readonly type = LOAD_TAGS_FAIL;
  constructor(public payload: any) {}
}

export type TagsAction = LoadTags | LoadTagsSuccess | LoadTagsFail;
