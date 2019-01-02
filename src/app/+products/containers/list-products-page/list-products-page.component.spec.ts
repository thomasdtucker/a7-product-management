import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { StoreModule } from '@ngrx/store';
import * as fromRoot from '#app/reducers/';

import { MaterialModule } from "#app/material";

import { ProductComponent} from "../../components/product/product.component";
import { ListProductsPageComponent } from './list-products-page.component';

describe('ListProductsPageComponent', () => {
  let component: ListProductsPageComponent;
  let fixture: ComponentFixture<ListProductsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        StoreModule.forRoot(fromRoot.reducers),
  ],
      declarations: [
        ListProductsPageComponent,
        ProductComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
