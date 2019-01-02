import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as moment from 'moment';

import { getRouterState } from '#app/reducers';
import * as ProductAction from '../actions/product.actions';
import { Product } from '../models';

export interface State {
  categories: any[];
  forms: {
    addProduct: Product;
    editProduct: Product;
  };
  products: Product[],
}

export const initialState: State = {
  categories: [],
  forms: {
    addProduct: new Product({}),
    editProduct: new Product({}),
  },
  products: [],
};

export function reducer(
  state = initialState,
  action: ProductAction.ProductActions,
): State {
  switch (action.type) {
    case ProductAction.ProductActionTypes.GET_PRODUCT_SUCCESS: {
      const { product } = action.payload;
      return {
        ...state,
        forms: {
          ...state.forms,
          editProduct: {
              ...state.forms.editProduct,
              ...product,
          },
        },
      };
    }
    case ProductAction.ProductActionTypes.GET_PRODUCT_CATEGORIES_SUCCESS: {
      const { categories } = action.payload;
      return {
        ...state,
        categories: [...categories],
      };
    }
    case ProductAction.ProductActionTypes.GET_PRODUCTS_SUCCESS: {
      const { products } = action.payload;
      return {
        ...state,
        products: [...products],
      };
    }
    default: {
      return state;
    }
  }
}

// state constants
export const getCategories = (state: State) => state.categories;
export const getFormAddProduct = (state: State) => state.forms.addProduct;
export const getFormEditProduct = (state: State) =>
  state.forms.editProduct;
export const getProducts = (state: State) => state.products;

// feature selector
export const getProductsState = createFeatureSelector<State>('products');

// value selectors
export const selectCategories = createSelector(
  getProductsState,
  getCategories,
);
export const selectProducts = createSelector(
  getProductsState,
  getProducts,
);

export const selectFormAddProduct = createSelector(
  getProductsState,
  getFormAddProduct,
);
export const selectFormEditProduct = createSelector(
  getProductsState,
  getFormEditProduct,
);

export const getRouteParameters = createSelector(
  getRouterState,
  router => router.state.root.firstChild.firstChild.params,
);
