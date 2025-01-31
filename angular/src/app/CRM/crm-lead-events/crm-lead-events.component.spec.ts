import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmLeadEventsComponent } from './crm-lead-events.component';

describe('CrmLeadEventsComponent', () => {
  let component: CrmLeadEventsComponent;
  let fixture: ComponentFixture<CrmLeadEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmLeadEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmLeadEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
