import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeadCustomerComponent } from './create-lead-customer.component';

describe('CreateLeadCustomerComponent', () => {
  let component: CreateLeadCustomerComponent;
  let fixture: ComponentFixture<CreateLeadCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLeadCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLeadCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
