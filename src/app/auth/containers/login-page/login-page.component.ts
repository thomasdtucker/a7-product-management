import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as AuthActions from '../../actions/auth.actions';
import * as fromAuth from '../../reducers';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  authToken$: Subscription;
  constructor(private store: Store<fromAuth.State>, private router: Router) {}

  ngOnInit() {
    this.authToken$ = this.store
      .pipe(select(fromAuth.getAuthToken))
      .subscribe(authToken => {
        if (authToken) {
          this.router.navigate(['/']);
        }
      });
  }

  ngOnDestroy() {
    this.authToken$.unsubscribe();
  }

  submit(loginForm) {
    const { token } = loginForm.value;
    this.store.dispatch(
      new AuthActions.Login({
        credentials: {
          token,
        },
      }),
    );
  }
}
