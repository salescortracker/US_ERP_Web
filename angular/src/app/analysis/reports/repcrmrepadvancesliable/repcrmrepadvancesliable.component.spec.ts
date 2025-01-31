import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcrmrepadvancesliableComponent } from './repcrmrepadvancesliable.component';

describe('RepcrmrepadvancesliableComponent', () => {
  let component: RepcrmrepadvancesliableComponent;
  let fixture: ComponentFixture<RepcrmrepadvancesliableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepcrmrepadvancesliableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcrmrepadvancesliableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
