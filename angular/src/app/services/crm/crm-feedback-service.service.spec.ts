import { TestBed } from '@angular/core/testing';

import { CrmFeedbackServiceService } from './crm-feedback-service.service';

describe('CrmFeedbackServiceService', () => {
  let service: CrmFeedbackServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmFeedbackServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
