import * as fromAuth from './auth.reducer';

import * as AuthActions from '../actions/auth.actions';

import { User } from '../models/user';

describe('AuthReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = fromAuth.reducer(undefined, action);

      /**
       * Snapshot tests are a quick way to validate
       * the state produced by a reducer since
       * its plain JavaScript object. These snapshots
       * are used to validate against the current state
       * if the functionality of the reducer ever changes.
       */
      expect(result).toMatchSnapshot();
    });
  });

  describe('LOGIN_SUCCESS', () => {
    it('should add a user set loggedIn to true in auth state', () => {
      const user: User = new User({
        id: 1,
        email: 'test@test.com',
        first_name: 'test',
        last_name: 'test',
      });
      const createAction = new AuthActions.LoginSuccess({ user });

      const expectedResult = {
        user: { name: 'test' },
      };

      const result = fromAuth.reducer(fromAuth.initialState, createAction);

      expect(result).toMatchSnapshot();
    });
  });

  describe('LOGOUT', () => {
    it('should logout a user', () => {
      const initialState: fromAuth.State = {
        authToken: 'test',
        user: null,
      };
      const createAction = new AuthActions.Logout();

      const expectedResult = fromAuth.initialState;

      const result = fromAuth.reducer(initialState, createAction);

      expect(result).toMatchSnapshot();
    });
  });
});
