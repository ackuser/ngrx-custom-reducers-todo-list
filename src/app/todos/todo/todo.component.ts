import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '../selector';
import { Remove, Toggle } from '../actions';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Output() onRemoveTodo = new EventEmitter<string>();
  @Output() onToggleTodo = new EventEmitter<string>();

  @Input() todo: Todo;

  constructor() { }

  removeTodo() {
    this.onRemoveTodo.emit(this.todo.id);
  }

  toggleTodo() {
    this.onToggleTodo.emit(this.todo.id);
  }

}
