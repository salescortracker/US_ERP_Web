import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcrmreporderscustomerwiseComponent } from './repcrmreporderscustomerwise.component';

describe('RepcrmreporderscustomerwiseComponent', () => {
  let component: RepcrmreporderscustomerwiseComponent;
  let fixture: ComponentFixture<RepcrmreporderscustomerwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepcrmreporderscustomerwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcrmreporderscustomerwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
