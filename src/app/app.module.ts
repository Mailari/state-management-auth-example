import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home.page';
import { authReducer, logout } from './store/auth.store';
import { counterReducer } from './store/counter.store';

@Component({
  selector: 'app-root',
  template: `
    <div class="m-[10%]">
      <h1>App component</h1>
      <button (click)="logout()">Logout</button>
      <nav class="list-none pb-24">
        <a class="px-10 text-blue-900" [routerLink]="['/home']">Home</a>
        <a class="px-10 text-blue-900" [routerLink]="['/notes']">Notes</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      h1 {
        @apply font-bold text-4xl;
      }
      h3 {
        @apply font-bold text-2xl;
      }
    `
  ]
})
export class AppComponent {
  title = 'auth-example';
  user = { email: '', password: '' };
  auth$: Observable<any>;
  constructor(private store: Store<any>, private router: Router) {
    this.auth$ = this.store.select('auth');
  }
  logout() {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HomeModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer, auth: authReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
