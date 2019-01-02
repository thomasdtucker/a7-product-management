import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Cookie } from 'ng2-cookies';

import * as AuthActions from '../actions/auth.actions';
import * as fromAuth from '../reducers';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getLoggedIn),
      map(authed => {
        if (!authed) {
          const token = localStorage.getItem('authToken');
          if (token) {
            this.store.dispatch(
              new AuthActions.LoginSuccess({ token }),
            );
            return true;
          } else {
            this.store.dispatch(new AuthActions.LoginRedirect());
          }
          return false;
        }
        return true;
      }),
    );
  }
}
