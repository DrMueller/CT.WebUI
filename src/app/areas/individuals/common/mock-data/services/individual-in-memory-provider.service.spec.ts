import { inject, TestBed } from '@angular/core/testing';

import { IndividualInMemoryProviderService } from './individual-in-memory-provider.service';

describe('IndividualInMemoryProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndividualInMemoryProviderService]
    });
  });

  it('should be created', inject([IndividualInMemoryProviderService], (service: IndividualInMemoryProviderService) => {
    expect(service).toBeTruthy();
  }));
});
