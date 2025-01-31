import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSettingsViewComponent } from './purchase-settings-view.component';

describe('PurchaseSettingsViewComponent', () => {
  let component: PurchaseSettingsViewComponent;
  let fixture: ComponentFixture<PurchaseSettingsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseSettingsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseSettingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
