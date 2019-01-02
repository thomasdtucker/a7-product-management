import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveStart, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';

import * as fromRoot from '../../../reducers';
import * as CoreActions from '../../actions/core.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  pageTitle: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<fromRoot.State>,
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof ResolveStart),
        map(event => {
          let data = null;
          // tslint:disable-next-line:no-string-literal
          let route = event['state'].root;

          while (route) {
            data = route.data || data;
            route = route.firstChild;
          }

          return data;
        }),
      )
      .subscribe(data => {
        this.pageTitle = data && data.name ? data.name : '';
      });
  }

  open() {
    this.store.dispatch(new CoreActions.OpenSidenav());
  }
}
