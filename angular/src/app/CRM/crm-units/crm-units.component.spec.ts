import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmUnitsComponent } from './crm-units.component';

describe('CrmUnitsComponent', () => {
  let component: CrmUnitsComponent;
  let fixture: ComponentFixture<CrmUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
