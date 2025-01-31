import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmLeadRemaindersComponent } from './crm-lead-remainders.component';

describe('CrmLeadRemaindersComponent', () => {
  let component: CrmLeadRemaindersComponent;
  let fixture: ComponentFixture<CrmLeadRemaindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmLeadRemaindersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmLeadRemaindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
