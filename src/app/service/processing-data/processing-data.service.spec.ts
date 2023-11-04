import { TestBed } from '@angular/core/testing';

import { ProcessingDataService } from './processing-data.service';

describe('ProcessingDataService', () => {
  let service: ProcessingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
