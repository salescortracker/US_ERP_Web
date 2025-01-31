import { TestBed } from '@angular/core/testing';

import { MaiPaymentsService } from './mai-payments.service';

describe('MaiPaymentsService', () => {
  let service: MaiPaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaiPaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
