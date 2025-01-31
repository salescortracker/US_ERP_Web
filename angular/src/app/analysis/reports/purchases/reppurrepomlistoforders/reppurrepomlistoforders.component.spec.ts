import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReppurrepomlistofordersComponent } from './reppurrepomlistoforders.component';

describe('ReppurrepomlistofordersComponent', () => {
  let component: ReppurrepomlistofordersComponent;
  let fixture: ComponentFixture<ReppurrepomlistofordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReppurrepomlistofordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReppurrepomlistofordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
