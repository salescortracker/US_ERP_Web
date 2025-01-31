import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmrepkeyrepcustomersComponent } from './crmrepkeyrepcustomers.component';

describe('CrmrepkeyrepcustomersComponent', () => {
  let component: CrmrepkeyrepcustomersComponent;
  let fixture: ComponentFixture<CrmrepkeyrepcustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmrepkeyrepcustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmrepkeyrepcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
