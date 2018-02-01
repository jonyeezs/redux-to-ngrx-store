import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-list',
  template: `
  <app-counter></app-counter>
  <div class="todos">
    <app-todo-item *ngFor="let item of (todos$ | async)" class="list"
      [todo]="item"
      (delete)="onDelete($event)">
    </app-todo-item>
    <a routerLink="./new" class="btn">New Todo</a>
  </div>`,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public todos$: Observable<Todo[]>;
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    // The dollar sign indicates the variable is an observable
    this.store.dispatch(new fromStore.LoadTags());
    this.todos$ = this.store.select(fromStore.getTodos);
  }

  // It's better to have one type of arguments for a certain store rather than specifics.
  // Let the reducer map to the correct behaviour.
  onDelete(todo: Todo) {
    this.store.dispatch(new fromStore.DeleteTodo(todo));
  }
}
