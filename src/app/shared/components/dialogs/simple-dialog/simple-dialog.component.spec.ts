import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SimpleDialogComponent } from './simple-dialog.component';

describe('SimpleDialogComponent', () => {
  let component: SimpleDialogComponent;
  let fixture: ComponentFixture<SimpleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: () => false,
          },
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            data: {
              title: 'test',
              message: 'test',
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
