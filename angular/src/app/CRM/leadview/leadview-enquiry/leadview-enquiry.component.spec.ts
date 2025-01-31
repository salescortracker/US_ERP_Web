import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadviewEnquiryComponent } from './leadview-enquiry.component';

describe('LeadviewEnquiryComponent', () => {
  let component: LeadviewEnquiryComponent;
  let fixture: ComponentFixture<LeadviewEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadviewEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadviewEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
