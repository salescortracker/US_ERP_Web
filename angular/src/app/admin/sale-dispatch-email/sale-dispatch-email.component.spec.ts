import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDispatchEmailComponent } from './sale-dispatch-email.component';

describe('SaleDispatchEmailComponent', () => {
  let component: SaleDispatchEmailComponent;
  let fixture: ComponentFixture<SaleDispatchEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleDispatchEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDispatchEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
