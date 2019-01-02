import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { catchError, flatMap, map, tap } from 'rxjs/operators';

import { Cookie } from 'ng2-cookies';

import { environment } from '#env/environment';

import * as AuthActions from '../actions/auth.actions';

import * as ProductActions from '#app/+products/actions/product.actions';
import * as CoreActions from '#app/core/actions/core.actions';
import { Credentials, User } from '../models/';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType<AuthActions.Login>(AuthActions.AuthActionTypes.LOGIN),
    map(action => action.payload.credentials),
    flatMap((credentials: Credentials) =>
      this.authService.login(credentials).pipe(
        map(() => credentials.token),
        map((token) => new AuthActions.LoginSuccess({ token })),
        catchError(error => of(new AuthActions.LoginError({ error }))),
      ),
    ),
  );

  @Effect()
  loginError$ = this.actions$.pipe(
    ofType<AuthActions.LoginError>(AuthActions.AuthActionTypes.LOGIN_ERROR),
    map(action => action.payload),
    map(
      payload =>
        new CoreActions.OpenNotification({
          action: 'OK',
          config: {
            panelClass: 'error',
          },
          message: 'token is invalid',
        }),
    ),
  );

  @Effect()
  loginSuccess$ = this.actions$.pipe(
    ofType<AuthActions.LoginSuccess>(AuthActions.AuthActionTypes.LOGIN_SUCCESS),
    map(action => action.payload),
    // tslint:disable-next-line
    map((payload) => payload.token),
    map((token) => {
      localStorage.setItem('authToken', token);
    }),
    map(() => new ProductActions.GetProductCategories()),
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType<AuthActions.LoginRedirect>(
      AuthActions.AuthActionTypes.LOGIN_REDIRECT,
    ),
    map(() => this.router.navigate(['/login'])),
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<AuthActions.Logout>(AuthActions.AuthActionTypes.LOGOUT),
    map(() => {
      localStorage.removeItem('authToken');
    }),
    map(() => this.router.navigate(['/login'])),
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}
}
