import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, logout } from '../store/auth.store';
@Component({
  selector: 'app-login',
  template: `<h1>Login</h1>
    <label for="email">Email</label>
    <input type="email" [(ngModel)]="user.email" id="email" />
    <label for="password">Password</label>
    <input type="password" [(ngModel)]="user.password" id="password" />
    <button (click)="login()">Login</button> `
})
export class LoginComponent {
  auth$: Observable<any>;
  user = { email: '', password: '' };
  constructor(private store: Store<{ isLoggedIn: boolean; user: any; token: string | null }>, private router: Router) {
    this.auth$ = this.store.select<{ isLoggedIn: boolean; user: any; token: string | null }>((state) => state);
  }
  login() {
    this.store.dispatch(login(this.user.email, this.user.password));
    this.router.navigate(['/home']);
  }
  logout() {
    this.store.dispatch(logout());
  }
}

@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule, RouterModule.forChild([{ path: '', component: LoginComponent }])],
  exports: [LoginComponent]
})
export class LoginModule {}
