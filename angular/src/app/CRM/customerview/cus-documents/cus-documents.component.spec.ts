import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusDocumentsComponent } from './cus-documents.component';

describe('CusDocumentsComponent', () => {
  let component: CusDocumentsComponent;
  let fixture: ComponentFixture<CusDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
