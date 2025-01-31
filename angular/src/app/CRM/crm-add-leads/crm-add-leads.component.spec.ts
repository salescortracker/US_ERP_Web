import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmAddLeadsComponent } from './crm-add-leads.component';

describe('CrmAddLeadsComponent', () => {
  let component: CrmAddLeadsComponent;
  let fixture: ComponentFixture<CrmAddLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmAddLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmAddLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
