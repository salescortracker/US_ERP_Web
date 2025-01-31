import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReppurrepompendingordersComponent } from './reppurrepompendingorders.component';

describe('ReppurrepompendingordersComponent', () => {
  let component: ReppurrepompendingordersComponent;
  let fixture: ComponentFixture<ReppurrepompendingordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReppurrepompendingordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReppurrepompendingordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
