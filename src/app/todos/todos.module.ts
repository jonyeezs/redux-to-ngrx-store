import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { TagsModule } from './tags/tags.module';

import { ListComponent } from './list/list.component';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';
import { TodoFormComponent } from './todo-entry/todo-form/todo-form.component';
// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: ':id',
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
    TagsModule
  ],
  declarations: [ListComponent, TodoEntryComponent, TodoFormComponent]
})
export class TodosModule { }
