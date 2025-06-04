import {TestBed } from '@angular/core/testing'
import { MedicRegisterService } from './medic.register.service';

describe('MedicRegisterService', () => {
  let service: MedicRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
