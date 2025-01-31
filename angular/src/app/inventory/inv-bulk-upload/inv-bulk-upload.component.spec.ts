import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvBulkUploadComponent } from './inv-bulk-upload.component';

describe('InvBulkUploadComponent', () => {
  let component: InvBulkUploadComponent;
  let fixture: ComponentFixture<InvBulkUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvBulkUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvBulkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
