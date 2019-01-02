import { inject, TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { cold } from 'jest-marbles';
import { AuthGuard } from './auth-guard.service';

import * as AuthActions from '../actions/auth.actions';

import * as fromRoot from '../../reducers';
import * as fromAuth from '../reducers';

import { User } from '../models';

describe('Auth Guard', () => {
  let guard: AuthGuard;
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          auth: combineReducers(fromAuth.reducers),
        }),
      ],
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    guard = TestBed.get(AuthGuard);
  });

  it('should return true if there is a token', () => {
    const action = new AuthActions.LoginSuccess({
      token: '123',
    });
    store.dispatch(action);
    const expected: any = cold('(a)', { a: true });

    expect(guard.canActivate()).toBeObservable(expected);
  });
});
