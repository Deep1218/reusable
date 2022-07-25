import { TestBed } from '@angular/core/testing';

import { ImportFromCsvService } from './import-from-csv.service';

describe('ImportFromCsvService', () => {
  let service: ImportFromCsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportFromCsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
