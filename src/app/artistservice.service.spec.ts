import { TestBed } from '@angular/core/testing';

import { ArtistserviceService } from './artistservice.service';

describe('ArtistserviceService', () => {
  let service: ArtistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
