import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusMainComponent } from './cus-main.component';

describe('CusMainComponent', () => {
  let component: CusMainComponent;
  let fixture: ComponentFixture<CusMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
