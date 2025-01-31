import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabScreenListComponent } from './lab-screen-list.component';

describe('LabScreenListComponent', () => {
  let component: LabScreenListComponent;
  let fixture: ComponentFixture<LabScreenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabScreenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabScreenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
