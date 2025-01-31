import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcrmrepenquiriespendingsComponent } from './repcrmrepenquiriespendings.component';

describe('RepcrmrepenquiriespendingsComponent', () => {
  let component: RepcrmrepenquiriespendingsComponent;
  let fixture: ComponentFixture<RepcrmrepenquiriespendingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepcrmrepenquiriespendingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcrmrepenquiriespendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
