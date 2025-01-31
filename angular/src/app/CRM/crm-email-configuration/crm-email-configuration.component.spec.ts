import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmEmailConfigurationComponent } from './crm-email-configuration.component';

describe('CrmEmailConfigurationComponent', () => {
  let component: CrmEmailConfigurationComponent;
  let fixture: ComponentFixture<CrmEmailConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmEmailConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmEmailConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
