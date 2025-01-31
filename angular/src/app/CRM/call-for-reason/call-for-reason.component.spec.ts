import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForReasonComponent } from './call-for-reason.component';

describe('CallForReasonComponent', () => {
  let component: CallForReasonComponent;
  let fixture: ComponentFixture<CallForReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallForReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallForReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
