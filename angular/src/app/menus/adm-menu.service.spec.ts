import { TestBed } from '@angular/core/testing';

import { AdmMenuService } from './adm-menu.service';

describe('AdmMenuService', () => {
  let service: AdmMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
