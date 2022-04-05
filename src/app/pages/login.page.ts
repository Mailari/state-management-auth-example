import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, logout } from '../store/auth.store';
@Component({
  selector: 'app-login',
  template: `<div class="md:w-[40%] w-full md:grid-cols-2 grid gap-4 items-center">
    <h1 class="col-span-2 text-3xl font-bold text-center">Login</h1>
    <div class="relative my-10 ">
      <label for="email">Email</label>
      <input type="email" [(ngModel)]="user.email" id="email" />
    </div>
    <div class="relative my-10 ">
      <label for="password">Password</label>
      <input type="password" [(ngModel)]="user.password" id="password" />
    </div>
    <button class="col-span-2" (click)="login()">Login</button>
  </div> `,
  styles: [
    `
      label {
        @apply absolute top-[-10px] left-[10px] bg-white font-bold text-xl;
      }
      input {
        @apply w-full border-solid text-2xl border-2 border-gray-800 p-2 rounded-md;
      }
      button {
        @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md;
      }
      button:hover {
        @apply bg-blue-700;
      }
    `
  ]
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
