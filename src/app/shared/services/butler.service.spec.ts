import { TestBed } from '@angular/core/testing';

import { ButlerService } from './butler.service';

describe('ButlerService', () => {
  let service: ButlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
