import { TestBed } from '@angular/core/testing';

import { HrdPayslipsService } from './hrd-payslips.service';

describe('HrdPayslipsService', () => {
  let service: HrdPayslipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdPayslipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
