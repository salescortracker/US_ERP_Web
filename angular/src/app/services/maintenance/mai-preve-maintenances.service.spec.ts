import { TestBed } from '@angular/core/testing';

import { MaiPreveMaintenancesService } from './mai-preve-maintenances.service';

describe('MaiPreveMaintenancesService', () => {
  let service: MaiPreveMaintenancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaiPreveMaintenancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
