import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import * as ProductActions from '../../actions/product.actions';
import * as fromProducts from '../../reducers';

import { Category, Product } from '../../models';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['../add-product-page/add-product-page.component.scss'],
})
export class EditProductPageComponent implements OnDestroy, OnInit {
  categories$: Observable<Category[]>;
  formState$: Observable<Product>;
  formState: FormGroup;
  formSubscription$: Subscription = new Subscription();
  params$: any;

  constructor(
    private store: Store<fromProducts.State>,
    private formBuilder: FormBuilder,
  ) {
    this.categories$ = this.store.pipe(
      select(fromProducts.selectCagegories),
    );
    this.formState$ = store.pipe(
      select(fromProducts.selectFormEditProduct),
    );
    this.formState = formBuilder.group({
      ...new Product({}),
    });
  }

  ngOnInit() {
    this.formSubscription$ = this.formState$.subscribe(formState => {
      this.formState.patchValue({
        ...formState,
      });
    });

    this.params$ = this.store
      .pipe(select(fromProducts.getRouteParameters))
      .subscribe(params => {
        const { id } = params;
        this.store.dispatch(
          new ProductActions.GetProduct({
            id,
          }),
        );
      });
  }

  ngOnDestroy() {
    this.params$.unsubscribe();
    this.formSubscription$.unsubscribe();
  }

  submit() {
    const { valid } = this.formState;
    const value = this.formState.getRawValue();
    if (valid) {
      this.store.dispatch(
        new ProductActions.UpdateProduct({
          product: value,
        }),
      );
    }
  }
}
