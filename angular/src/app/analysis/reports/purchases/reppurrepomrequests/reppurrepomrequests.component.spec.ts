import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReppurrepomrequestsComponent } from './reppurrepomrequests.component';

describe('ReppurrepomrequestsComponent', () => {
  let component: ReppurrepomrequestsComponent;
  let fixture: ComponentFixture<ReppurrepomrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReppurrepomrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReppurrepomrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
