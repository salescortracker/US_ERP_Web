import { TestBed } from '@angular/core/testing';

import { InvScopeofSupplyService } from './inv-scopeof-supply.service';

describe('InvScopeofSupplyService', () => {
  let service: InvScopeofSupplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvScopeofSupplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
