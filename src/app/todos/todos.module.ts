import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from '../store';

import { HasTodosRouterGuard } from '../../guards/has-todos.router.guard';
import { TodoExistsRouterGuard } from '../../guards/todo-exists.router.guard';

import { Routes, RouterModule } from '@angular/router';

import { TagsModule } from './tags/tags.module';

import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './list/list.component';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';
import { TodoFormComponent } from './todo-entry/todo-form/todo-form.component';
import { TodoItemComponent } from './list/todo-item/todo-item.component';
// routes
export const ROUTES: Routes = [
  {
    path: '',
    canActivate: [HasTodosRouterGuard],
    component: ListComponent,
  },
  {
    path: 'new',
    canActivate: [HasTodosRouterGuard],
    component: TodoEntryComponent,
  },
  {
    // give a specific name for the ID
    // As we may get confuse with the many different id we are refering to
    path: ':todoId',
    canActivate: [TodoExistsRouterGuard],
    component: TodoEntryComponent,
  }
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
  providers: [HasTodosRouterGuard, TodoExistsRouterGuard],
  declarations: [CounterComponent, ListComponent, TodoEntryComponent, TodoFormComponent, TodoItemComponent]
})
export class TodosModule { }
