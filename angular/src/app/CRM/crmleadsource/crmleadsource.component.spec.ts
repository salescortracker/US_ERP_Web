import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmleadsourceComponent } from './crmleadsource.component';

describe('CrmleadsourceComponent', () => {
  let component: CrmleadsourceComponent;
  let fixture: ComponentFixture<CrmleadsourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmleadsourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmleadsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
