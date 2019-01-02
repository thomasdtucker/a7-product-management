import { Action } from '@ngrx/store';
import { Product } from '../models';

export enum ProductActionTypes {
  CREATE_PRODUCT = '[PRODUCT] Create Product',
  CREATE_PRODUCT_SUCCESS = '[PRODUCT] Create Product Success',
  CREATE_PRODUCT_ERROR = '[PRODUCT] Create Product Error',
  DELETE_PRODUCT = '[PRODUCT] Delete Product',
  DELETE_PRODUCT_SUCCESS = '[PRODUCT] Delete Product Success',
  DELETE_PRODUCT_ERROR = '[PRODUCT] Delete Product Error',
  GET_PRODUCT = '[PRODUCT] Get Product',
  GET_PRODUCT_SUCCESS = '[PRODUCT] Get Product Success',
  GET_PRODUCT_ERROR = '[PRODUCT] Get Product Error',
  GET_PRODUCT_CATEGORIES = '[PRODUCT] Get Product Categories',
  GET_PRODUCT_CATEGORIES_SUCCESS = '[PRODUCT] Get Product Categories Success',
  GET_PRODUCT_CATEGORIES_ERROR = '[PRODUCT] Get Product Categories Error',
  UPDATE_PRODUCT = '[PRODUCT] Update Product',
  UPDATE_PRODUCT_SUCCESS = '[PRODUCT] Update Product Success',
  UPDATE_PRODUCT_ERROR = '[PRODUCT] Update Product Error',
}

export class CreateProduct implements Action {
  readonly type = ProductActionTypes.CREATE_PRODUCT;

  constructor(public payload: { product: Product }) {}
}

export class CreateProductSuccess implements Action {
  readonly type = ProductActionTypes.CREATE_PRODUCT_SUCCESS;

  constructor(public payload: { product: Product }) {}
}

export class CreateProductError implements Action {
  readonly type = ProductActionTypes.CREATE_PRODUCT_ERROR;

  constructor(public payload: { error: any }) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT;

  constructor(public payload: { product: Product }) {}
}

export class DeleteProductSuccess implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT_SUCCESS;

  constructor(public payload: { product: Product }) {}
}

export class DeleteProductError implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT_ERROR;

  constructor(public payload: { error: any }) {}
}

export class GetProduct implements Action {
  readonly type = ProductActionTypes.GET_PRODUCT;

  constructor(public payload: { id: string }) {}
}

export class GetProductSuccess implements Action {
  readonly type = ProductActionTypes.GET_PRODUCT_SUCCESS;

  constructor(public payload: { product: Product }) {}
}

export class GetProductError implements Action {
  readonly type = ProductActionTypes.GET_PRODUCT_ERROR;

  constructor(public payload: { error: any }) {}
}

export class GetProductCategories implements Action {
  readonly type = ProductActionTypes.GET_PRODUCT_CATEGORIES;
}

export class GetProductCategoriesSuccess implements Action {
  readonly type = ProductActionTypes.GET_PRODUCT_CATEGORIES_SUCCESS;

  constructor(public payload: { categories: any }) {}
}

export class GetProductCategoriesError implements Action {
  readonly type = ProductActionTypes.GET_PRODUCT_CATEGORIES_ERROR;

  constructor(public payload: { error: any }) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCT;

  constructor(public payload: { product: Product }) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCT_SUCCESS;

  constructor(public payload: { product: Product }) {}
}

export class UpdateProductError implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCT_ERROR;

  constructor(public payload: { error: any }) {}
}

export type ProductActions =
  | CreateProduct
  | CreateProductSuccess
  | CreateProductError
  | DeleteProduct
  | DeleteProductSuccess
  | DeleteProductError
  | GetProduct
  | GetProductSuccess
  | GetProductError
  | GetProductCategories
  | GetProductCategoriesSuccess
  | GetProductCategoriesError
  | UpdateProduct
  | UpdateProductSuccess
  | UpdateProductError;
