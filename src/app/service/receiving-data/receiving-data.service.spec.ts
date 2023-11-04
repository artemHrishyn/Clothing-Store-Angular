import { TestBed } from '@angular/core/testing';

import { ReceivingDataService } from './receiving-data.service';

describe('ReceivingDataService', () => {
  let service: ReceivingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceivingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
