import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmLeadsCalllogsComponent } from './crm-leads-calllogs.component';

describe('CrmLeadsCalllogsComponent', () => {
  let component: CrmLeadsCalllogsComponent;
  let fixture: ComponentFixture<CrmLeadsCalllogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmLeadsCalllogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmLeadsCalllogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
