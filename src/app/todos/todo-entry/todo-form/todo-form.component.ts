import {
  Component, OnInit,
  Input, Output, EventEmitter,
  OnChanges, SimpleChanges, ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Todo } from '../../../models/Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit, OnChanges {

  @Input() todo: Todo;

  @Output() update = new EventEmitter<Todo>();

  // FormGroup's form
  // Ensure the field's name are the same as the Todo class
  todoForm = this.formBuilder.group({
    label: ['']
  });
  public todoId: string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.todo && this.todo.id) {
      this.todoForm.patchValue(changes.todo.currentValue);
      this.todoId = this.todo.id;
    }
  }

  saveTodo(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      // immutable object is passed
      this.update.emit({ ...this.todo, ...value });
    }
  }

}
