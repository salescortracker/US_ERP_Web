import { TestBed } from '@angular/core/testing';

import { CrmLeadManagementService } from './crm-lead-management.service';

describe('CrmLeadManagementService', () => {
  let service: CrmLeadManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmLeadManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
