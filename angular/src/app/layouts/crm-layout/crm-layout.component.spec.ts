import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmLayoutComponent } from './crm-layout.component';

describe('CrmLayoutComponent', () => {
  let component: CrmLayoutComponent;
  let fixture: ComponentFixture<CrmLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
