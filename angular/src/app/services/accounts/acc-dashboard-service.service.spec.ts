import { TestBed } from '@angular/core/testing';

import { AccDashboardServiceService } from './acc-dashboard-service.service';

describe('AccDashboardServiceService', () => {
  let service: AccDashboardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccDashboardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
