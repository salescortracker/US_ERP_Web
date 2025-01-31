import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcrmrepcallerwisecallsComponent } from './repcrmrepcallerwisecalls.component';

describe('RepcrmrepcallerwisecallsComponent', () => {
  let component: RepcrmrepcallerwisecallsComponent;
  let fixture: ComponentFixture<RepcrmrepcallerwisecallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepcrmrepcallerwisecallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcrmrepcallerwisecallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
