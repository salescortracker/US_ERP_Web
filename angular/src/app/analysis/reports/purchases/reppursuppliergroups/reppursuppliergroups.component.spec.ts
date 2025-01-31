import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReppursuppliergroupsComponent } from './reppursuppliergroups.component';

describe('ReppursuppliergroupsComponent', () => {
  let component: ReppursuppliergroupsComponent;
  let fixture: ComponentFixture<ReppursuppliergroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReppursuppliergroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReppursuppliergroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
