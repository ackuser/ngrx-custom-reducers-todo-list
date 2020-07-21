import { Component, OnInit, Input } from '@angular/core';
import { Observable, from, of, BehaviorSubject } from 'rxjs';
import { Todo } from '../interfaces';
import { Store } from '@ngrx/store';
import { AppState, selectTodos } from '../selector';
import { Add, Remove, Toggle } from '../actions';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  // todos$: Observable<Todo[]>;
  newTodoText: string = "";

  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject([{ text: `Same todo task again and again` } as Todo]);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // this.todos$ = this.store.select(selectTodos);


    let count = 0;

    // setInterval(() => {


    const todo = { text: `Same todo task 2 again and again` } as Todo;
    const todoBis = { text: `Same todo task 1 again and again` } as Todo;
    const todo1 = [{ text: `Same todo task 1 again and again` } as Todo];
    const todo2 = [{ text: `Same todo task 2 again and again` } as Todo];
    const todo12 = [todo, todo, todo, todo, todo, todoBis];


    // this.store.dispatch(Add({ text: `Todo task ${count}` }))
    // this.store.dispatch(Add({ text: `Todo task ${count}` }))

    // this.todos$ = of([{ text: `Todo task ${count}` } as Todo]);
    // this.todos$ = of([{ text: `Same todo task again and again` } as Todo]);
    this.todos$.next(undefined);
    this.todos$.next(null);
    this.todos$.next([null]);
    this.todos$.next(todo12);
    this.todos$.next(todo12);
    this.todos$.next(todo1);
    setInterval(() => {
      this.todos$.next(todo12);
    }, 1000)


    this.todos$.pipe(tap(value => {
      console.log(value);
      debugger
    }))
    // this.todosFactory$.next(todo12);
    // this.todosFactory$.next(todo12);
    count++;


  }


  addTodo() {
    this.store.dispatch(Add({ text: this.newTodoText || 'Untitled task' }));
    this.newTodoText = '';
  }

  removeTodo(id: string) {
    this.store.dispatch(Remove({ id }));
  }

  toggleTodo(id: string) {
    this.store.dispatch(Toggle({ id }));
  }


}
