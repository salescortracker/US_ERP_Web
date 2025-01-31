import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusEventsComponent } from './cus-events.component';

describe('CusEventsComponent', () => {
  let component: CusEventsComponent;
  let fixture: ComponentFixture<CusEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
