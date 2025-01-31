import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusRemindersComponent } from './cus-reminders.component';

describe('CusRemindersComponent', () => {
  let component: CusRemindersComponent;
  let fixture: ComponentFixture<CusRemindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusRemindersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
