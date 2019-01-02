import { Action } from '@ngrx/store';
import { Credentials, User } from '../models';

export enum AuthActionTypes {
  LOGIN = '[AUTH] Login',
  LOGIN_SUCCESS = '[AUTH] Login Success',
  LOGIN_ERROR = '[AUTH] Login Failure',
  LOGIN_REDIRECT = '[AUTH] Login Redirect',
  LOGOUT = '[AUTH] Logout',
  LOGOUT_CONFIRMATION = '[AUTH] Logout Confirmation',
  GET_USER = '[AUTH] Get User',
  GET_USER_SUCCESS = '[AUTH] Get User Success',
  GET_USER_ERROR = '[AUTH] Get User Error',
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;

  constructor(public payload: { credentials: Credentials }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: any) {}
}

export class LoginError implements Action {
  readonly type = AuthActionTypes.LOGIN_ERROR;

  constructor(public payload: { error: any }) {}
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LOGIN_REDIRECT;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class LogoutConfirmation implements Action {
  readonly type = AuthActionTypes.LOGOUT_CONFIRMATION;
}

export class GetUser implements Action {
  readonly type = AuthActionTypes.GET_USER;
}

export class GetUserSuccess implements Action {
  readonly type = AuthActionTypes.GET_USER_SUCCESS;

  constructor(public user: User) {}
}

export class GetUserError implements Action {
  readonly type = AuthActionTypes.GET_USER_ERROR;

  constructor(public payload: { error: any }) {}
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginError
  | LoginRedirect
  | Logout
  | LogoutConfirmation
  | GetUser
  | GetUserSuccess
  | GetUserError;
