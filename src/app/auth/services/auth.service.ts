import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { environment } from '#env/environment';

import { Credentials, User } from '../models';
import * as fromRoot from '../reducers';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_AUTH_URL = environment.api_v1;

  constructor(private http: HttpClient, private store: Store<fromRoot.State>) {
  }

  login = (credentials: Credentials) => {
    const { token } = credentials;
    let headers = new HttpHeaders();
    headers = headers
      .set('Authorization', token)
      .set('Accept','application/json');

    const options = { headers };
    return this.http.get(this.API_AUTH_URL + 'Categories?nointercept', options);
  }
}
