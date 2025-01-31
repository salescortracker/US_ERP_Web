import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmorderstatusComponent } from './crmorderstatus.component';

describe('CrmorderstatusComponent', () => {
  let component: CrmorderstatusComponent;
  let fixture: ComponentFixture<CrmorderstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmorderstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmorderstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
