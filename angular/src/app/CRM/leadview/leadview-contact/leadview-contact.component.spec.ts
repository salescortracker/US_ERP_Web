import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadviewContactComponent } from './leadview-contact.component';

describe('LeadviewContactComponent', () => {
  let component: LeadviewContactComponent;
  let fixture: ComponentFixture<LeadviewContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadviewContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadviewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
