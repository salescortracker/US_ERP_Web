import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmQuotationCreateComponent } from './crm-quotation-create.component';

describe('CrmQuotationCreateComponent', () => {
  let component: CrmQuotationCreateComponent;
  let fixture: ComponentFixture<CrmQuotationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmQuotationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmQuotationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
