import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdEmployeesDetailsComponent } from './hrd-employees-details.component';

describe('HrdEmployeesDetailsComponent', () => {
  let component: HrdEmployeesDetailsComponent;
  let fixture: ComponentFixture<HrdEmployeesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdEmployeesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdEmployeesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
