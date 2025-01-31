import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadviewEventsComponent } from './leadview-events.component';

describe('LeadviewEventsComponent', () => {
  let component: LeadviewEventsComponent;
  let fixture: ComponentFixture<LeadviewEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadviewEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadviewEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
