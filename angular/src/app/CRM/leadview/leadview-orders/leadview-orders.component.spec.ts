import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadviewOrdersComponent } from './leadview-orders.component';

describe('LeadviewOrdersComponent', () => {
  let component: LeadviewOrdersComponent;
  let fixture: ComponentFixture<LeadviewOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadviewOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadviewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
