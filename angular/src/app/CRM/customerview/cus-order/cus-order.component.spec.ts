import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusOrderComponent } from './cus-order.component';

describe('CusOrderComponent', () => {
  let component: CusOrderComponent;
  let fixture: ComponentFixture<CusOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
