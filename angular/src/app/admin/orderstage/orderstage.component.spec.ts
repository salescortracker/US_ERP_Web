import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderstageComponent } from './orderstage.component';

describe('OrderstageComponent', () => {
  let component: OrderstageComponent;
  let fixture: ComponentFixture<OrderstageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderstageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
