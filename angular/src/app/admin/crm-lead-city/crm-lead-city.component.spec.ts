import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmLeadCityComponent } from './crm-lead-city.component';

describe('CrmLeadCityComponent', () => {
  let component: CrmLeadCityComponent;
  let fixture: ComponentFixture<CrmLeadCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmLeadCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmLeadCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
