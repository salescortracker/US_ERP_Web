import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurSuppliersBulkUploadComponent } from './pur-suppliers-bulk-upload.component';

describe('PurSuppliersBulkUploadComponent', () => {
  let component: PurSuppliersBulkUploadComponent;
  let fixture: ComponentFixture<PurSuppliersBulkUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurSuppliersBulkUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurSuppliersBulkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
