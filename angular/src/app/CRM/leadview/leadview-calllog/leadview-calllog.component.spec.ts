import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadviewCalllogComponent } from './leadview-calllog.component';

describe('LeadviewCalllogComponent', () => {
  let component: LeadviewCalllogComponent;
  let fixture: ComponentFixture<LeadviewCalllogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadviewCalllogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadviewCalllogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
