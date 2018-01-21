import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Tag } from '../../models/Tag';

@Component({
  selector: 'app-tags',
  template: `
    <div>
      List of tags to choose from
      <ul *ngFor="let tag of (tags$ | async)">
        <li>
          <label>
            {{tag.label}}
            <button type="button" (click)="onAdd(tag)">Add</button>
          </label>
        </li>
      </ul>
    </div>
    `,
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags$: Observable<Tag[]>;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadTags());
    this.tags$ = this.store.select(fromStore.getAvailableTags);
  }

  onAdd(event: any) {
    console.log(event);
  }
}
