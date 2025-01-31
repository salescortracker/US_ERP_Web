import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryRegisterComponent } from './enquiry-register.component';

describe('EnquiryRegisterComponent', () => {
  let component: EnquiryRegisterComponent;
  let fixture: ComponentFixture<EnquiryRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
