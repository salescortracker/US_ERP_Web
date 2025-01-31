import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcrmrepordersitemwiseComponent } from './repcrmrepordersitemwise.component';

describe('RepcrmrepordersitemwiseComponent', () => {
  let component: RepcrmrepordersitemwiseComponent;
  let fixture: ComponentFixture<RepcrmrepordersitemwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepcrmrepordersitemwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcrmrepordersitemwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
