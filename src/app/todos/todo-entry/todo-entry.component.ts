import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
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

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.todo$ = this.store.select(fromStore.getSelectedTodo);
  }

  onUpdate(updatedTodo: Todo) {
    console.table(updatedTodo);

  }
}
