import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcrmpostrepagingsComponent } from './repcrmpostrepagings.component';

describe('RepcrmpostrepagingsComponent', () => {
  let component: RepcrmpostrepagingsComponent;
  let fixture: ComponentFixture<RepcrmpostrepagingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepcrmpostrepagingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcrmpostrepagingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
