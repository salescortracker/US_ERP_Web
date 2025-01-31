import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmleadindustryComponent } from './crmleadindustry.component';

describe('CrmleadindustryComponent', () => {
  let component: CrmleadindustryComponent;
  let fixture: ComponentFixture<CrmleadindustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmleadindustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmleadindustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
