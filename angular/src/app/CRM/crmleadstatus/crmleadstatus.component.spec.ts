import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmleadstatusComponent } from './crmleadstatus.component';

describe('CrmleadstatusComponent', () => {
  let component: CrmleadstatusComponent;
  let fixture: ComponentFixture<CrmleadstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmleadstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmleadstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
