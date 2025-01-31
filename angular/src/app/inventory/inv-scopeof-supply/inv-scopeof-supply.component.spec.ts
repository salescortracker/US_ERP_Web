import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvScopeofSupplyComponent } from './inv-scopeof-supply.component';

describe('InvScopeofSupplyComponent', () => {
  let component: InvScopeofSupplyComponent;
  let fixture: ComponentFixture<InvScopeofSupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvScopeofSupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvScopeofSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
