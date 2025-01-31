import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadOwnerComponent } from './lead-owner.component';

describe('LeadOwnerComponent', () => {
  let component: LeadOwnerComponent;
  let fixture: ComponentFixture<LeadOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
