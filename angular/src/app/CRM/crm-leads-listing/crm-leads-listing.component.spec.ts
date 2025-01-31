import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmLeadsListingComponent } from './crm-leads-listing.component';

describe('CrmLeadsListingComponent', () => {
  let component: CrmLeadsListingComponent;
  let fixture: ComponentFixture<CrmLeadsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmLeadsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmLeadsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
