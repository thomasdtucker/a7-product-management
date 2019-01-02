import * as AuthAction from '../actions/auth.actions';
import { User } from '../models/user';

export interface State {
  authToken: string | '';
  user: User | null;
}

export const initialState: State = {
  authToken: '',
  user: null,
};

export function reducer(
  state = initialState,
  action: AuthAction.AuthActions,
): State {
  switch (action.type) {
    case AuthAction.AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        authToken: action.payload.token,
      };
    }
    case AuthAction.AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getAuthToken = (state: State) => state.authToken;
export const getLoggedIn = (state: State) => !!state.authToken;
