import { TestBed } from '@angular/core/testing';

import { GoToUrlService } from './go-to-url.service';

describe('GoToUrlService', () => {
  let service: GoToUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoToUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
