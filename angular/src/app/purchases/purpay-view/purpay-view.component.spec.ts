import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpayViewComponent } from './purpay-view.component';

describe('PurpayViewComponent', () => {
  let component: PurpayViewComponent;
  let fixture: ComponentFixture<PurpayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurpayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurpayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
