import { TestBed } from '@angular/core/testing';

import { CustomerInwardService } from './customer-inward.service';

describe('CustomerInwardService', () => {
  let service: CustomerInwardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerInwardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
