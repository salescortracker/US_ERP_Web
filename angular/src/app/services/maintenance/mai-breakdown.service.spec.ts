import { TestBed } from '@angular/core/testing';

import { MaiBreakdownService } from './mai-breakdown.service';

describe('MaiBreakdownService', () => {
  let service: MaiBreakdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaiBreakdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
