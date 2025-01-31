import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcrmreptelecallspendingsComponent } from './repcrmreptelecallspendings.component';

describe('RepcrmreptelecallspendingsComponent', () => {
  let component: RepcrmreptelecallspendingsComponent;
  let fixture: ComponentFixture<RepcrmreptelecallspendingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepcrmreptelecallspendingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcrmreptelecallspendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
