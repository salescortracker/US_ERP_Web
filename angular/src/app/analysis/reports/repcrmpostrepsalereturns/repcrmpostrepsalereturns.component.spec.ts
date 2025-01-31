import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcrmpostrepsalereturnsComponent } from './repcrmpostrepsalereturns.component';

describe('RepcrmpostrepsalereturnsComponent', () => {
  let component: RepcrmpostrepsalereturnsComponent;
  let fixture: ComponentFixture<RepcrmpostrepsalereturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepcrmpostrepsalereturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcrmpostrepsalereturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
