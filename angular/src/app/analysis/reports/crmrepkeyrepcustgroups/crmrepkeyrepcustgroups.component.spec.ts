import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmrepkeyrepcustgroupsComponent } from './crmrepkeyrepcustgroups.component';

describe('CrmrepkeyrepcustgroupsComponent', () => {
  let component: CrmrepkeyrepcustgroupsComponent;
  let fixture: ComponentFixture<CrmrepkeyrepcustgroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmrepkeyrepcustgroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmrepkeyrepcustgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
