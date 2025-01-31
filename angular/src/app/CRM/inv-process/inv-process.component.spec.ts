import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvProcessComponent } from './inv-process.component';

describe('InvProcessComponent', () => {
  let component: InvProcessComponent;
  let fixture: ComponentFixture<InvProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
