import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

import { Tag } from '../../models/Tag';

@Component({
  selector: 'app-tags-display',
  template: `
    <ul *ngFor="let tag of (tags$ | async)">
      <li>
        <label>
          {{tag.label}}
          <button type="button" (click)="onRemove(tag)">Remove</button>
          </label>
          </li>
    </ul>
  `,
  styleUrls: ['./tags-display.component.css']
})
export class TagsDisplayComponent implements OnInit {

  tags$: Observable<Tag[]>;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.tags$ = this.store.select(fromStore.getTodosTags);
  }

}
