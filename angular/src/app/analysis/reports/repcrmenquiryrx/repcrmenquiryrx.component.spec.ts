import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcrmenquiryrxComponent } from './repcrmenquiryrx.component';

describe('RepcrmenquiryrxComponent', () => {
  let component: RepcrmenquiryrxComponent;
  let fixture: ComponentFixture<RepcrmenquiryrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepcrmenquiryrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcrmenquiryrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
