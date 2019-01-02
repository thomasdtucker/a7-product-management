import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { User } from '#app/auth/models';

import * as fromRoot from '#app/reducers';
import * as CoreActions from '../../actions/core.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  showSidenav: boolean;
  sideNav$: Subscription;
  navigation$: Observable<object[]>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.sideNav$ = this.store
      .pipe(select(fromRoot.getShowSidenav))
      .subscribe(open => {
        this.showSidenav = open;
      });
    this.navigation$ = this.store.pipe(select(fromRoot.getNavigation));
  }

  close() {
    this.store.dispatch(new CoreActions.CloseSidenav());
  }

  ngOnDestroy() {
    this.sideNav$.unsubscribe();
  }
}
