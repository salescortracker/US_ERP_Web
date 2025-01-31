import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadviewDocumentComponent } from './leadview-document.component';

describe('LeadviewDocumentComponent', () => {
  let component: LeadviewDocumentComponent;
  let fixture: ComponentFixture<LeadviewDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadviewDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadviewDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
