import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { UploadServiceService } from './upload-service.service';

describe('UploadServiceService', () => {
  let service: UploadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
    });
    service = TestBed.inject(UploadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});