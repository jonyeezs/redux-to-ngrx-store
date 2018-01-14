import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '../../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEdit() {
    this.router.navigate(['todos', this.todo.id]);
  }

  onDelete() {
    this.delete.emit(this.todo.id);
  }
}
