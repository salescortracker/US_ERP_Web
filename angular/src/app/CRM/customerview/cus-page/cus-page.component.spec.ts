import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusPageComponent } from './cus-page.component';

describe('CusPageComponent', () => {
  let component: CusPageComponent;
  let fixture: ComponentFixture<CusPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
