import {
  HttpClient,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromAuth from '#app/auth/reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authToken: string;

  constructor(private http: HttpClient, private store: Store<fromAuth.State>) {
    this.store.pipe(select(fromAuth.getAuthToken)).subscribe(token => {
      this.authToken = token;
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      headers: req.headers
        .set('Accept', 'application/json')
        .set('Authorization', this.authToken)
        .set('Content-Type', 'application/json'),
    });
    if (req.url.includes('nointercept')) {
      return next.handle(req);
    }
    return next.handle(authReq);
  }
}
