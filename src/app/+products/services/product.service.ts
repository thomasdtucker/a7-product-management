import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { environment } from '#env/environment';

import * as fromAuth from '#app/auth/reducers';

import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_AUTH_URL = environment.api_v1;

  constructor(private http: HttpClient, private store: Store<fromAuth.State>) {}

  addProduct = (product: Product) =>
    this.http.post(`${this.API_AUTH_URL}products`, product);

  deleteProduct = (id: number) =>
    this.http.delete(`${this.API_AUTH_URL}products/${id}`);

  getProduct = (id: string) =>
    this.http.get(`${this.API_AUTH_URL}products/${id}`);

  getProducts = () =>
    this.http.get(`${this.API_AUTH_URL}products`);

  getProductCategories = () =>
    this.http.get(`${this.API_AUTH_URL}categories`);

  updateProduct = (id: number, product: Product) =>
    this.http.put(`${this.API_AUTH_URL}products/${+id}`, product);
}
