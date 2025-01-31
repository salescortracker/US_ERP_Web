import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmLeadViewComponent } from './crm-lead-view.component';

describe('CrmLeadViewComponent', () => {
  let component: CrmLeadViewComponent;
  let fixture: ComponentFixture<CrmLeadViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmLeadViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmLeadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
