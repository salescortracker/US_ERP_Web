import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvPriceListComponent } from './inv-price-list.component';

describe('InvPriceListComponent', () => {
  let component: InvPriceListComponent;
  let fixture: ComponentFixture<InvPriceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvPriceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
