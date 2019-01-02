import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '#app/auth/services/auth-guard.service';

import { AddProductPageComponent } from './containers/add-product-page/add-product-page.component';
import { EditProductPageComponent } from './containers/edit-product-page/edit-product-page.component';
import { ListProductsPageComponent } from './containers/list-products-page/list-products-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddProductPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id',
    component: EditProductPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list',
    component: ListProductsPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
