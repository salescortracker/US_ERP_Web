import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmContactViewComponent } from './crm-contact-view.component';

describe('CrmContactViewComponent', () => {
  let component: CrmContactViewComponent;
  let fixture: ComponentFixture<CrmContactViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmContactViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmContactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
