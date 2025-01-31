import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerTelecallingComponent } from './create-customer-telecalling.component';

describe('CreateCustomerTelecallingComponent', () => {
  let component: CreateCustomerTelecallingComponent;
  let fixture: ComponentFixture<CreateCustomerTelecallingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomerTelecallingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerTelecallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
