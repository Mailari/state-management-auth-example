import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../store/counter.store';
@Component({
  selector: 'app-counter',
  template: `<h1 class="text-5xl">Counter</h1>
    <button class="" (click)="increment()">Increment</button>
    <div>Current Count: {{ count$ | async }}</div>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset Counter</button> `
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<any>) {
    this.count$ = this.store.select('count');
  }
  increment = () => this.store.dispatch(increment());

  decrement = () => this.store.dispatch(decrement());

  reset = () => this.store.dispatch(reset());
}
