import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ProductActions from '../../actions/product.actions';
import * as fromProducts from '../../reducers';

import { Product} from "../../models";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input()
  product: Product;

  constructor(
    private store: Store<fromProducts.State>,
  ) { }

  delete(){
    this.store.dispatch(
      new ProductActions.DeleteProduct({
        product: this.product,
      }),
    );
  }
}
