import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  template: `
  <p>You have <span>{{counter$ | async}}</span> todos.</p>`,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public counter$: Observable<number>;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.counter$ = this.store.select(fromStore.getTodos)
      .pipe(map(todos => todos.length));
  }

}
