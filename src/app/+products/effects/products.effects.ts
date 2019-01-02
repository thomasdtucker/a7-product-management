import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';

import {Observable, of} from 'rxjs';
import { catchError, flatMap, map, switchMap, tap } from 'rxjs/operators';

import * as CoreActions from '#app/core/actions/core.actions';
import * as ProductActions from '../actions/product.actions';
import * as fromProducts from '../reducers';

import { ProductService } from '../services/product.service';

import { Product } from '../models';

@Injectable()
export class ProductEffects {

  @Effect()
  createProduct$ = this.actions$.pipe(
    ofType<ProductActions.CreateProduct>(
      ProductActions.ProductActionTypes.CREATE_PRODUCT,
    ),
    map(action => action.payload.product),
    switchMap((newProduct: Product) =>
      this.productService.addProduct(newProduct).pipe(
        map(
          product =>
            new ProductActions.CreateProductSuccess({
              product,
            }),
        ),
        catchError(error => {
          return of(new ProductActions.CreateProductError({ error }));
        }),
      ),
    ),
  );

  @Effect()
  createProductError$ = this.actions$.pipe(
    ofType<ProductActions.CreateProductError>(
      ProductActions.ProductActionTypes.CREATE_PRODUCT_ERROR,
    ),
    map(action => action.payload),
    map(
      payload =>
        new CoreActions.OpenNotification({
          action: 'OK',
          config: {
            panelClass: 'error',
          },
          message: payload.error.error.message,
        }),
    ),
  );

  @Effect()
  createProductSuccess$ = this.actions$.pipe(
    ofType<ProductActions.CreateProductSuccess>(
      ProductActions.ProductActionTypes.CREATE_PRODUCT_SUCCESS,
    ),
    tap(action => {
      this.router.navigate([`/products/edit/${action.payload.product.ProductId}`]);
    }),
    map(
      () =>
        new CoreActions.OpenNotification({
          action: 'OK',
          message: 'Product Added',
        }),
    ),
  );

  @Effect()
  deleteProduct$ = this.actions$.pipe(
    ofType<ProductActions.DeleteProduct>(
      ProductActions.ProductActionTypes.DELETE_PRODUCT,
    ),
    map(action => action.payload.product),
    flatMap(product =>
      this.productService.deleteProduct(product.ProductId).pipe(
        map(() => new ProductActions.DeleteProductSuccess({ product })),
        catchError(error => {
          return of(new ProductActions.DeleteProductError({ error }));
        }),
      ),
    ),
  );

  @Effect()
  deleteProductError$ = this.actions$.pipe(
    ofType<ProductActions.DeleteProductError>(
      ProductActions.ProductActionTypes.DELETE_PRODUCT_ERROR,
    ),
    map(action => action.payload),
    map(
      payload =>
        new CoreActions.OpenNotification({
          action: 'OK',
          config: {
            panelClass: 'error',
          },
          message: payload.error.error.message,
        }),
    ),
  );

  @Effect()
  deleteProductSuccess$ = this.actions$.pipe(
    ofType<ProductActions.DeleteProductSuccess>(
      ProductActions.ProductActionTypes.DELETE_PRODUCT_SUCCESS,
    ),
    map(
      () =>
        new CoreActions.OpenNotification({
          action: 'OK',
          message: 'Qualifier Deleted',
        }),
    ),
  );

  @Effect()
  getProduct$ = this.actions$.pipe(
    ofType<ProductActions.GetProduct>(
      ProductActions.ProductActionTypes.GET_PRODUCT,
    ),
    map(action => action.payload.id),
    flatMap((id: string) =>
      this.productService.getProduct(id).pipe(
        map( (product: Product) => ({
            ...product,
            CategoryIds: product.Categories.reduce(
              (arr, cat) => arr.concat(cat.CategoryId), [])
          }),
        ),
        map(
          product =>
            new ProductActions.GetProductSuccess({
              product,
            }),
        ),
        catchError(error => {
          return of(new ProductActions.GetProductError({ error }));
        }),
      ),
    ),
  );

  @Effect()
  getProductError$ = this.actions$.pipe(
    ofType<ProductActions.GetProductError>(
      ProductActions.ProductActionTypes.GET_PRODUCT_ERROR,
    ),
    map(action => action.payload),
    map(
      payload =>
        new CoreActions.OpenNotification({
          action: 'OK',
          config: {
            panelClass: 'error',
          },
          message: payload.error.error.message,
        }),
    ),
  );

  @Effect()
  getProductSuccess$ = this.actions$.pipe(
    ofType<ProductActions.GetProductSuccess>(
      ProductActions.ProductActionTypes.GET_PRODUCT_SUCCESS,
    ),
    map(
      () =>
        new CoreActions.OpenNotification({
          action: 'OK',
          message: 'Product Loaded',
        }),
    ),
  );

  @Effect()
  getProductCategories$ = this.actions$.pipe(
    ofType<ProductActions.GetProductCategories>(
      ProductActions.ProductActionTypes.GET_PRODUCT_CATEGORIES,
    ),
    switchMap(() =>
      this.productService.getProductCategories().pipe(
        map(
          categories =>
            new ProductActions.GetProductCategoriesSuccess({
              categories,
            }),
        ),
        catchError(error => {
          return of(new ProductActions.GetProductCategoriesError({ error }));
        }),
      ),
    ),
  );

  @Effect()
  getProducts$ = this.actions$.pipe(
    ofType<ProductActions.GetProducts>(
      ProductActions.ProductActionTypes.GET_PRODUCTS,
    ),
    switchMap(() =>
      this.productService.getProducts().pipe(
        map(
          (products: Product[]) =>
            new ProductActions.GetProductsSuccess({
              products,
            }),
        ),
        catchError(error => {
          return of(new ProductActions.GetProductsError({ error }));
        }),
      ),
    ),
  );


  @Effect()
  updateProduct$ = this.actions$.pipe(
    ofType<ProductActions.UpdateProduct>(
      ProductActions.ProductActionTypes.UPDATE_PRODUCT,
    ),
    map(action => action.payload.product),
    flatMap((product: Product) =>
      this.productService.updateProduct(product.ProductId, product).pipe(
        map(() => new ProductActions.UpdateProductSuccess({ product })),
        catchError(error => {
          return of(new ProductActions.UpdateProductError({ error }));
        }),
      ),
    ),
  );

  @Effect()
  updateProductError$ = this.actions$.pipe(
    ofType<ProductActions.UpdateProductError>(
      ProductActions.ProductActionTypes.UPDATE_PRODUCT_ERROR,
    ),
    map(action => action.payload),
    map(
      payload =>
        new CoreActions.OpenNotification({
          action: 'OK',
          config: {
            panelClass: 'error',
          },
          message: payload.error.error.message,
        }),
    ),
  );

  @Effect()
  updateProductSuccess$ = this.actions$.pipe(
    ofType<ProductActions.UpdateProductSuccess>(
      ProductActions.ProductActionTypes.UPDATE_PRODUCT_SUCCESS,
    ),
    map(
      () =>
        new CoreActions.OpenNotification({
          action: 'OK',
          message: 'Product Updated',
        }),
    ),
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private router: Router,
  ) {}
}
