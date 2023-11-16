import { TestBed } from '@angular/core/testing';

import { ClassProductService } from './class-product.service';

describe('ClassProductService', () => {
  let service: ClassProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
