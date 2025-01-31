import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvSaleOrdersComponent } from './inv-sale-orders.component';

describe('InvSaleOrdersComponent', () => {
  let component: InvSaleOrdersComponent;
  let fixture: ComponentFixture<InvSaleOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvSaleOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvSaleOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
