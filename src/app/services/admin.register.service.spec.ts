import {TestBed } from '@angular/core/testing'
import { AdminRegisterService } from './admin.register.service';

describe('MedicRegisterService', () => {
  let service: AdminRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});