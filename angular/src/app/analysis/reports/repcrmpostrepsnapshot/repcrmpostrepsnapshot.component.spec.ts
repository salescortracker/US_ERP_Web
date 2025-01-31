import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcrmpostrepsnapshotComponent } from './repcrmpostrepsnapshot.component';

describe('RepcrmpostrepsnapshotComponent', () => {
  let component: RepcrmpostrepsnapshotComponent;
  let fixture: ComponentFixture<RepcrmpostrepsnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepcrmpostrepsnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcrmpostrepsnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
