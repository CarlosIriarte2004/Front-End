import { TestBed } from '@angular/core/testing';

import { MedicProfileService } from './medic-profile.service';

describe('MedicProfileService', () => {
  let service: MedicProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
