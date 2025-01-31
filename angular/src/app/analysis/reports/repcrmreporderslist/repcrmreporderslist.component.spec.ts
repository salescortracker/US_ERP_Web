import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcrmreporderslistComponent } from './repcrmreporderslist.component';

describe('RepcrmreporderslistComponent', () => {
  let component: RepcrmreporderslistComponent;
  let fixture: ComponentFixture<RepcrmreporderslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepcrmreporderslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcrmreporderslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
