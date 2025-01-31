import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusEnquiryComponent } from './cus-enquiry.component';

describe('CusEnquiryComponent', () => {
  let component: CusEnquiryComponent;
  let fixture: ComponentFixture<CusEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
