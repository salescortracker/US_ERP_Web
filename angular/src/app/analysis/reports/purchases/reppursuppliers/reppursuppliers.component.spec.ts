import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReppursuppliersComponent } from './reppursuppliers.component';

describe('ReppursuppliersComponent', () => {
  let component: ReppursuppliersComponent;
  let fixture: ComponentFixture<ReppursuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReppursuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReppursuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
