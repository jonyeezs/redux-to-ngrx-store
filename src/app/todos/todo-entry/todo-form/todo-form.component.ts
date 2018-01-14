import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Todo } from '../../../models/Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Input() todo: Todo;

  @Output() update = new EventEmitter<Todo>();

  // FormGroup's form
  // Ensure the field's name are the same as the Todo class
  todoForm = this.formBuilder.group({
    label: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  saveTodo(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      // immutable object is passed
      this.update.emit({ ...this.todo, ...value });
    }
  }

}
