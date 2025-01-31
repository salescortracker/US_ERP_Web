import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusQuotationComponent } from './cus-quotation.component';

describe('CusQuotationComponent', () => {
  let component: CusQuotationComponent;
  let fixture: ComponentFixture<CusQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
