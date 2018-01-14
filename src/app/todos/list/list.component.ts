import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public todos: Todo[];
  constructor() { }

  ngOnInit() {
    this.todos = [{
      id: 1,
      label: 'first',
      complete: false,
      tags: ['a', 'b'],
    }, {
      id: 2,
      label: 'second example',
      complete: true,
      tags: [],
    }];
  }
  onDelete(id) {
    this.todos = this.todos.filter((item) => item.id !== id);
  }
}
