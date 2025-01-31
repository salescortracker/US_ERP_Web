import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerManagementListingComponent } from './customer-management-listing.component';

describe('CustomerManagementListingComponent', () => {
  let component: CustomerManagementListingComponent;
  let fixture: ComponentFixture<CustomerManagementListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerManagementListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerManagementListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
