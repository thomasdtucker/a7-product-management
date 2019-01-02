import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jest-marbles';
import { empty, Observable, of } from 'rxjs';
import * as AuthActions from '../actions/auth.actions';

import { AuthService } from '../services/auth.service';
import { AuthEffects } from './auth.effects';

import { Credentials } from '../models';

describe('AuthEffects', () => {
  let effects: AuthEffects;
  let authService: any;
  let actions$: Observable<any>;
  let routerService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        {
          provide: AuthService,
          useValue: {
            login: jest.fn(),
          },
        },
        provideMockActions(() => actions$),
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
      ],
    });

    effects = TestBed.get(AuthEffects);
    authService = TestBed.get(AuthService);
    actions$ = TestBed.get(Actions);
    routerService = TestBed.get(Router);

    spyOn(routerService, 'navigate').and.callThrough();
  });

  describe('login$', () => {
    it('should return an auth.LoginSuccess action, with authentication_token if login succeeds', () => {
      const credentials: Credentials = { token: 'test' };
      const action = new AuthActions.Login({ credentials });
      const completion = new AuthActions.LoginSuccess({
        token: 'test',
      });

      actions$ = hot('-a---', { a: action });
      const response = cold('-a|', { a: credentials });
      const expected = cold('--b', { b: completion });
      authService.login = jest.fn(() => response);

      expect(effects.login$).toBeObservable(expected);
    });
  });
});
