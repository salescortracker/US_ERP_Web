import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadviewQuotationComponent } from './leadview-quotation.component';

describe('LeadviewQuotationComponent', () => {
  let component: LeadviewQuotationComponent;
  let fixture: ComponentFixture<LeadviewQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadviewQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadviewQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
