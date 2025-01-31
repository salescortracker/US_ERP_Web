import { TestBed } from '@angular/core/testing';

import { InvProcessService } from './inv-process.service';

describe('InvProcessService', () => {
  let service: InvProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
