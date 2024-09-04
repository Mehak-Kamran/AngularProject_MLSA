import { TestBed } from '@angular/core/testing';

import { RentalserviceService } from './rentalservice.service';

describe('RentalserviceService', () => {
  let service: RentalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
