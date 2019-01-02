import { CoreActions, CoreActionTypes } from '../actions/core.actions';

import { environment } from '#env/environment';

export interface State {
  navigation: any[];
  showNotification: boolean;
  showSidenav: boolean;
}

const initialState: State = {
  navigation: [
    {
      title: 'Dashboard',
      routerLink: `/dashboard`,
    },
    {
      title: 'Products',
      routerLink: `/products`,
    },
  ],
  showNotification: false,
  showSidenav: false,
};

export function reducer(
  state: State = initialState,
  action: CoreActions,
): State {
  switch (action.type) {
    case CoreActionTypes.CLOSE_NOTIFICATION:
      return {
        ...state,
        showNotification: false,
      };

    case CoreActionTypes.CLOSE_SIDENAV:
      return {
        ...state,
        showSidenav: false,
      };

    case CoreActionTypes.OPEN_SIDENAV:
      return {
        ...state,
        showSidenav: true,
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const getNavigation = (state: State) => state.navigation;
