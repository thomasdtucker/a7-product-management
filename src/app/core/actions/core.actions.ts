import { MatSnackBarConfig } from '@angular/material';
import { Action } from '@ngrx/store';

export enum CoreActionTypes {
  CLOSE_NOTIFICATION = '[Layout] Close Notification',
  CLOSE_SIDENAV = '[Layout] Close Sidenav',
  OPEN_NOTIFICATION = '[Layout] Open Notification',
  OPEN_SIDENAV = '[Layout] Open Sidenav',
}

export class CloseNotification implements Action {
  readonly type = CoreActionTypes.CLOSE_NOTIFICATION;
}

export class CloseSidenav implements Action {
  readonly type = CoreActionTypes.CLOSE_SIDENAV;
}

export class OpenNotification implements Action {
  readonly type = CoreActionTypes.OPEN_NOTIFICATION;

  constructor(
    public payload: {
      message: string;
      action?: string;
      config?: MatSnackBarConfig;
    },
  ) {}
}

export class OpenSidenav implements Action {
  readonly type = CoreActionTypes.OPEN_SIDENAV;
}

export type CoreActions =
  | CloseNotification
  | OpenNotification
  | CloseSidenav
  | OpenSidenav;
