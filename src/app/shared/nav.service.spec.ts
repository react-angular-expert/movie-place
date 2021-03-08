import { TestBed, inject } from '@angular/core/testing';

import { navService } from './nav.service';

describe('NavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [navService]
    });
  });

  it('should be created', inject([navService], (service: navService) => {
    expect(service).toBeTruthy();
  }));
});
