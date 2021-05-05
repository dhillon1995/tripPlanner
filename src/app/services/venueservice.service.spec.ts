import { TestBed } from '@angular/core/testing';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { VenueserviceService } from './venueservice.service';

describe('VenueserviceService', () => {
  let service: VenueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
