import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {

  todo$: Observable<Todo>;

  private isNew: boolean;
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.todo$ = this.store.select(fromStore.getSelectedTodo)
      .do(todo => (this.isNew = !todo.label));
  }

  onUpdate(updatedTodo: Todo) {
    this.store.dispatch(
      this.isNew ? new fromStore.CreateTodo(updatedTodo)
        : new fromStore.UpdateTodo(updatedTodo));
  }
}
