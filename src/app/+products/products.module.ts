import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '#app/shared/shared.module';
import { MaterialModule } from '../material';

import { ProductsRoutingModule } from './products-routing.module';

import { reducer } from './reducers';

import { ProductEffects } from './effects/products.effects';

import { AddProductPageComponent } from './containers/add-product-page/add-product-page.component';
import { EditProductPageComponent } from './containers/edit-product-page/edit-product-page.component';

@NgModule({
  imports: [
    ProductsRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
  declarations: [
    AddProductPageComponent,
    EditProductPageComponent,
  ],
})
export class ProductsModule {}
