import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcrmreptelecallslistComponent } from './repcrmreptelecallslist.component';

describe('RepcrmreptelecallslistComponent', () => {
  let component: RepcrmreptelecallslistComponent;
  let fixture: ComponentFixture<RepcrmreptelecallslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepcrmreptelecallslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcrmreptelecallslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
