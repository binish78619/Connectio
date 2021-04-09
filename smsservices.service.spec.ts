import { TestBed } from '@angular/core/testing';

import { SmsservicesService } from './smsservices.service';

describe('SmsservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmsservicesService = TestBed.get(SmsservicesService);
    expect(service).toBeTruthy();
  });
});
