import * as fromRouter from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { environment } from '#env/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromCore from '../core/reducers/core.reducer';

export interface State {
  core: fromCore.State;
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  core: fromCore.reducer,
  router: fromRouter.routerReducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  // tslint:disable-next-line:only-arrow-functions
  return function(state: State, action: any): State {
    return reducer(state, action);
  };
}

export const metaReducers: Array<MetaReducer<State>> = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getCoreState = createFeatureSelector<State, fromCore.State>(
  'core',
);

export const getShowSidenav = createSelector(
  getCoreState,
  fromCore.getShowSidenav,
);

export const getNavigation = createSelector(
  getCoreState,
  fromCore.getNavigation,
);

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState
>('router');
