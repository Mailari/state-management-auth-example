import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  auth: Observable<any>;
  constructor(private router: Router, private store: Store<any>) {
    this.auth = this.store.select('auth');
  }
  canActivate() {
    console.log('AuthGuard#canActivate called');

    return this.auth.pipe(
      map(({ isLoggedIn }) => {
        if (isLoggedIn) return true;
        return this.router.createUrlTree(['/login']);
      })
    );
  }
}
