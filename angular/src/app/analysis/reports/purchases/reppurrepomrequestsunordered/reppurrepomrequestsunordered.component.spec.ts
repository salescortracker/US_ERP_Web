import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReppurrepomrequestsunorderedComponent } from './reppurrepomrequestsunordered.component';

describe('ReppurrepomrequestsunorderedComponent', () => {
  let component: ReppurrepomrequestsunorderedComponent;
  let fixture: ComponentFixture<ReppurrepomrequestsunorderedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReppurrepomrequestsunorderedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReppurrepomrequestsunorderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
