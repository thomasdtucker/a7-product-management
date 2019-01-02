import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Action, select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Category, Product } from '../../models';
import * as fromProducts from '../../reducers';

import * as ProductActions from '../../actions/product.actions';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductPageComponent {
  categories$: Observable<Category[]>;
  formState: FormGroup;

  constructor(
    private store: Store<fromProducts.State>,
    private formBuilder: FormBuilder,
  ) {
    this.categories$ = this.store.pipe(
      select(fromProducts.selectCagegories),
    );

    this.formState = formBuilder.group({
      ...new Product({}),
    });
  }

  submit() {
    const { valid, value } = this.formState;
    if (valid) {
      this.store.dispatch(
        new ProductActions.CreateProduct({
          product: value,
        }),
      );
    }
  }
}
