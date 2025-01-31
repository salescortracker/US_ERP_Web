import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvViewComponent } from './inv-view.component';

describe('InvViewComponent', () => {
  let component: InvViewComponent;
  let fixture: ComponentFixture<InvViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
