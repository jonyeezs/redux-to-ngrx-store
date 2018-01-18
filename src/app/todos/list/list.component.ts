import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-list',
  template: `
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
    this.todos$ = this.store.select(fromStore.getTodos);
  }
  onDelete(id) {
    // this.todos = this.todos.filter((item) => item.id !== id);
  }
}
