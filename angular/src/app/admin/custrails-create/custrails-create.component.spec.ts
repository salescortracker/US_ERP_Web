import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustrailsCreateComponent } from './custrails-create.component';

describe('CustrailsCreateComponent', () => {
  let component: CustrailsCreateComponent;
  let fixture: ComponentFixture<CustrailsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustrailsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustrailsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
