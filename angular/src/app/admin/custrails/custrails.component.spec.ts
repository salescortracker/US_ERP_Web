import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustrailsComponent } from './custrails.component';

describe('CustrailsComponent', () => {
  let component: CustrailsComponent;
  let fixture: ComponentFixture<CustrailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustrailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
