import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadviewReminderComponent } from './leadview-reminder.component';

describe('LeadviewReminderComponent', () => {
  let component: LeadviewReminderComponent;
  let fixture: ComponentFixture<LeadviewReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadviewReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadviewReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
