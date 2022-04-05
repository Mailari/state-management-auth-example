import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterComponent } from '../utils/counter.component';
@Component({
  selector: 'app-home',
  template: `<h1>Home</h1>
    <app-counter> </app-counter>
    <pre class=" bg-zinc-800 text-white">{{ (auth | async)?.user | json }}</pre>`
})
export class HomeComponent {
  auth: Observable<any>;
  constructor(private store: Store<any>) {
    this.auth = this.store.select('auth');
  }
}
@NgModule({
  declarations: [HomeComponent, CounterComponent],
  exports: [HomeComponent, CounterComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: HomeComponent }])]
})
export class HomeModule {}
