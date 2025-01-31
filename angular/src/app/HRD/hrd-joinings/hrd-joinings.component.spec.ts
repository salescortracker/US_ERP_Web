import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdJoiningsComponent } from './hrd-joinings.component';

describe('HrdJoiningsComponent', () => {
  let component: HrdJoiningsComponent;
  let fixture: ComponentFixture<HrdJoiningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdJoiningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdJoiningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
