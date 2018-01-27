import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import * as fromStore from '../../store';

import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todo-entry',
  template: `
    <app-todo-form
      [todo]="todo$ | async"
      (update)="onUpdate($event)">
    </app-todo-form>`,
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {

  todo$: Observable<Todo>;

  private isNew: boolean;
  constructor(private store: Store<fromStore.AppState>, private router: Router) { }

  ngOnInit() {
    this.todo$ = this.store.select(fromStore.getSelectedTodo)
      .do(todo => (this.isNew = !!todo.id));
  }

  onUpdate(updatedTodo: Todo) {
    if (this.isNew) {
      this.store.dispatch(new fromStore.CreateTodo(updatedTodo));
      this.router.navigate(['']);
    } else {
      console.log(updatedTodo);
    }
  }
}
