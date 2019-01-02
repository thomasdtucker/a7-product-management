import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';

import * as CoreActions from '../actions/core.actions';

@Injectable()
export class CoreEffects {
  @Effect({ dispatch: false })
  closeNotification$ = this.actions$.pipe(
    ofType<CoreActions.CloseNotification>(
      CoreActions.CoreActionTypes.CLOSE_NOTIFICATION,
    ),
    tap(() => this.matSnackBar.dismiss()),
  );

  @Effect()
  openNotifications$ = this.actions$.pipe(
    ofType<CoreActions.OpenNotification>(
      CoreActions.CoreActionTypes.OPEN_NOTIFICATION,
    ),
    map((action: CoreActions.OpenNotification) => action.payload),
    tap(payload =>
      this.matSnackBar.open(payload.message, payload.action, payload.config),
    ),
    delay(5000),
    map(() => new CoreActions.CloseNotification()),
  );

  constructor(private actions$: Actions, private matSnackBar: MatSnackBar) {}
}
