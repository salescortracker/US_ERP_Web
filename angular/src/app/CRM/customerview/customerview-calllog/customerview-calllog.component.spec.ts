import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerviewCalllogComponent } from './customerview-calllog.component';

describe('CustomerviewCalllogComponent', () => {
  let component: CustomerviewCalllogComponent;
  let fixture: ComponentFixture<CustomerviewCalllogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerviewCalllogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerviewCalllogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
