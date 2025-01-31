import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageinnsignupComponent } from './manageinnsignup.component';

describe('ManageinnsignupComponent', () => {
  let component: ManageinnsignupComponent;
  let fixture: ComponentFixture<ManageinnsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageinnsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageinnsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
