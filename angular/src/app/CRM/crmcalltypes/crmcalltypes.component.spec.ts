import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmcalltypesComponent } from './crmcalltypes.component';

describe('CrmcalltypesComponent', () => {
  let component: CrmcalltypesComponent;
  let fixture: ComponentFixture<CrmcalltypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmcalltypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmcalltypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
