import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecallingComponent } from './telecalling.component';

describe('TelecallingComponent', () => {
  let component: TelecallingComponent;
  let fixture: ComponentFixture<TelecallingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecallingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
