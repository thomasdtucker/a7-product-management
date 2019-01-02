import {
  Component,
  OnInit,
} from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as ProductActions from '../../actions/product.actions';
import * as fromProducts from '../../reducers';

import { Product } from '../../models';

@Component({
  selector: 'app-list-products-page',
  templateUrl: './list-products-page.component.html',
  styleUrls: ['./list-products-page.component.scss']
})
export class ListProductsPageComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private store: Store<fromProducts.State>,
  ) {
    this.products$ = this.store.pipe(
      select(fromProducts.selectProducts),
    );
  }

  ngOnInit() {
    this.store.dispatch(
      new ProductActions.GetProducts(),
    );
  }
}
