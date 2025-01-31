import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReppurrepomrequestspendingComponent } from './reppurrepomrequestspending.component';

describe('ReppurrepomrequestspendingComponent', () => {
  let component: ReppurrepomrequestspendingComponent;
  let fixture: ComponentFixture<ReppurrepomrequestspendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReppurrepomrequestspendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReppurrepomrequestspendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
