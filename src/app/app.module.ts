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
    <h1>Counter State management</h1>
    <h3>User Status</h3>
    <button (click)="logout()">Logout</button>
    <pre>{{ auth$ | async | json }}</pre>
    <nav style="text-decoration-line: none; ">
      <a [routerLink]="['/home']">Home</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      a {
        text-decoration: none;
        padding: 10px;
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
