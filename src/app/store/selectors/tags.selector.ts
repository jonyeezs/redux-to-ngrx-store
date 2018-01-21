import { createSelector } from '@ngrx/store';

import { AppState, getAppState } from '../reducers';
import * as fromTags from '../reducers/tags.reducer';
import * as fromRouter from '../reducers/router.reducer';
import * as fromTodos from './todos.selector';

import { Tag } from '../../models/Tag';
import { Todo } from '../../models/Todo';

export const getTagsState = createSelector(
  getAppState,
  (state: AppState) => state.tags
);

export const getTags = createSelector(
  getTagsState,
  (state: fromTags.TagsState) => state.data
);

export const getAvailableTags = createSelector(
  getTags,
  fromTodos.getSelectedTodo,
  (tags: Tag[], selectedTodo: Todo) => {
    if (!selectedTodo.tags || !selectedTodo.tags.length) {
      return tags;
    }
    return tags.filter((tag) => !selectedTodo.tags.includes(tag.label));
  }
);

export const getTodosTags = createSelector(
  getTags,
  fromTodos.getSelectedTodo,
  (tags: Tag[], selectedTodo: Todo): Tag[] => {
    if (!selectedTodo.tags || !selectedTodo.tags.length) {
      return [];
    }
    return selectedTodo.tags.map(selectedTag =>
      tags.find(tag => tag.label === selectedTag));
  }
);
