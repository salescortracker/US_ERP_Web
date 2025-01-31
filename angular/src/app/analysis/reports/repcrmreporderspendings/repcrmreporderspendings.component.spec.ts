import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcrmreporderspendingsComponent } from './repcrmreporderspendings.component';

describe('RepcrmreporderspendingsComponent', () => {
  let component: RepcrmreporderspendingsComponent;
  let fixture: ComponentFixture<RepcrmreporderspendingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepcrmreporderspendingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcrmreporderspendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
