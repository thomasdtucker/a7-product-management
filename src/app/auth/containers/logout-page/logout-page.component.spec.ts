import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { combineReducers, StoreModule } from '@ngrx/store';

import * as fromAuth from '#app/auth/reducers';
import { MaterialModule } from '#app/material';

import { LogoutPageComponent } from './logout-page.component';

describe('LogoutPageComponent', () => {
  let component: LogoutPageComponent;
  let fixture: ComponentFixture<LogoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        StoreModule.forRoot({
          auth: combineReducers(fromAuth.reducers),
        }),
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [LogoutPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
