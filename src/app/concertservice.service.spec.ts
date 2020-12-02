import { TestBed } from '@angular/core/testing';

import { ConcertserviceService } from './concertservice.service';

describe('ConcertserviceService', () => {
  let service: ConcertserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcertserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
