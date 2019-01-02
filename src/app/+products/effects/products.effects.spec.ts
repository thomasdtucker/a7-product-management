import { TestBed } from '@angular/core/testing';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jest-marbles';
import { empty, Observable, of } from 'rxjs';
import * as ProductActions from '../actions/product.actions';

import { ProductService } from '../services/product.service';
import { ProductEffects } from './products.effects';

import * as AuthActions from '#app/auth/actions/auth.actions';
import { Credentials } from '#app/auth/models';
import {environment} from "#env/environment";

import { Product } from '../models';

describe('ProductEffects', () => {
  let effects: ProductEffects;
  let productService: any;
  let actions$: Observable<any>;
  let routerService: any;
  let API_AUTH_URL = environment.api_v1;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        {
          provide: ProductService,
          useValue: {
            login: jest.fn(),
          },
        },
        provideMockActions(() => actions$),
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
      ],
    });

    effects = TestBed.get(ProductEffects);
    productService = TestBed.get(ProductService);
    actions$ = TestBed.get(Actions);
    routerService = TestBed.get(Router);

    spyOn(routerService, 'navigate').and.callThrough();
  });

  describe('createProduct$', () => {
    it('should return a ProductActions.CreateProductSuccess action, with payload if createProduct succeeds', () => {
      const payload = {
        ProductId: 123,
        CategoryIds: [1],
        Description: 'test',
        Name: 'test',
        Url: 'test',
      };
      const product: Product = {
        ...payload,
      };
      const action = new ProductActions.CreateProduct({ product });
      const completion = new ProductActions.CreateProductSuccess({
        product,
      });

      actions$ = hot('-a---', { a: action });
      const response = cold('-a|', {
        a: {
          ...product,
        },
      });
      const expected = cold('--b', { b: completion });
      productService.addProduct = jest.fn(() => response);

      expect(effects.createProduct$).toBeObservable(expected);
    });
  });
});
