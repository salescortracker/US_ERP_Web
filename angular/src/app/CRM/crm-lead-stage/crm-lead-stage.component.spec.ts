import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmLeadStageComponent } from './crm-lead-stage.component';

describe('CrmLeadStageComponent', () => {
  let component: CrmLeadStageComponent;
  let fixture: ComponentFixture<CrmLeadStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmLeadStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmLeadStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
