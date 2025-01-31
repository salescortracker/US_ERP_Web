import { TestBed } from '@angular/core/testing';

import { ExcelConverterService } from './excel-converter.service';

describe('ExcelConverterService', () => {
  let service: ExcelConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
