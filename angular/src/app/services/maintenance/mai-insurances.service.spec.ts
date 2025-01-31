import { TestBed } from '@angular/core/testing';

import { MaiInsurancesService } from './mai-insurances.service';

describe('MaiInsurancesService', () => {
  let service: MaiInsurancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaiInsurancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
