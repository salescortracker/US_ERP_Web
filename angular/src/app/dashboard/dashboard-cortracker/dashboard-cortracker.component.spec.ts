import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCortrackerComponent } from './dashboard-cortracker.component';

describe('DashboardCortrackerComponent', () => {
  let component: DashboardCortrackerComponent;
  let fixture: ComponentFixture<DashboardCortrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCortrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCortrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
