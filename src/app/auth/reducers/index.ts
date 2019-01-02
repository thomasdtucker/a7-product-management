import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { AuthActions } from '../actions/auth.actions';

import * as fromRoot from '#app/reducers';
import * as fromAuth from './auth.reducer';

export interface AuthState {
  status: fromAuth.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState, AuthActions> = {
  status: fromAuth.reducer,
};

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status,
);

export const getAuthToken = createSelector(
  selectAuthStatusState,
  fromAuth.getAuthToken,
);

export const getLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuth.getLoggedIn,
);
