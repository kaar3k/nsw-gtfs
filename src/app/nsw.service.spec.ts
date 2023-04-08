import { TestBed } from '@angular/core/testing';

import { NSWService } from './nsw.service';

describe('NSWService', () => {
  let service: NSWService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NSWService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
