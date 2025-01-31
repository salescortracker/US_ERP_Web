import { TestBed } from '@angular/core/testing';

import { HrdLeavesTraService } from './hrd-leaves-tra.service';

describe('HrdLeavesTraService', () => {
  let service: HrdLeavesTraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdLeavesTraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
