import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInwardsComponent } from './customer-inwards.component';

describe('CustomerInwardsComponent', () => {
  let component: CustomerInwardsComponent;
  let fixture: ComponentFixture<CustomerInwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
