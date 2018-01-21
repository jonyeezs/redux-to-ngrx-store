import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from '../store';

import { Routes, RouterModule } from '@angular/router';

import { TagsModule } from './tags/tags.module';

import { ListComponent } from './list/list.component';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';
import { TodoFormComponent } from './todo-entry/todo-form/todo-form.component';
import { TodoItemComponent } from './list/todo-item/todo-item.component';
// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    // give a specific name for the ID
    // As we may get confuse with the many different id we are refering to
    path: ':todoId',
    component: TodoEntryComponent,
  },
  {
    path: 'new',
    component: TodoEntryComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    // This allows for lazy loading
    // And still attach it to the root store.
    // This feature is called app.
    StoreModule.forFeature('app', reducers),
    EffectsModule.forFeature(effects),
    TagsModule
  ],
  declarations: [ListComponent, TodoEntryComponent, TodoFormComponent, TodoItemComponent]
})
export class TodosModule { }
