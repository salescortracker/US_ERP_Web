import { TestBed } from '@angular/core/testing';

import { HrdAdvancesService } from './hrd-advances.service';

describe('HrdAdvancesService', () => {
  let service: HrdAdvancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdAdvancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
