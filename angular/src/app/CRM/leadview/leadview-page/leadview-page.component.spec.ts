import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadviewPageComponent } from './leadview-page.component';

describe('LeadviewPageComponent', () => {
  let component: LeadviewPageComponent;
  let fixture: ComponentFixture<LeadviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
