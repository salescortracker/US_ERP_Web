import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReppurrepomsupplierwiseordersComponent } from './reppurrepomsupplierwiseorders.component';

describe('ReppurrepomsupplierwiseordersComponent', () => {
  let component: ReppurrepomsupplierwiseordersComponent;
  let fixture: ComponentFixture<ReppurrepomsupplierwiseordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReppurrepomsupplierwiseordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReppurrepomsupplierwiseordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
