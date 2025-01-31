import { TestBed } from '@angular/core/testing';

import { CrmEnquiryregisterServiceService } from './crm-enquiryregister-service.service';

describe('CrmEnquiryregisterServiceService', () => {
  let service: CrmEnquiryregisterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmEnquiryregisterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
