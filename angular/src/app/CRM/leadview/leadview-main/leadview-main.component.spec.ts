import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadviewMainComponent } from './leadview-main.component';

describe('LeadviewMainComponent', () => {
  let component: LeadviewMainComponent;
  let fixture: ComponentFixture<LeadviewMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadviewMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadviewMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
