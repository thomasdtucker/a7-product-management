import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as AuthActions from '../../actions/auth.actions';
import * as fromAuth from '../../reducers';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.scss'],
})
export class LogoutPageComponent implements OnInit {
  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
