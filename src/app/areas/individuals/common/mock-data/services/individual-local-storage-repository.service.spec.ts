import { TestBed, inject } from '@angular/core/testing';

import { IndividualLocalStorageRepositoryService } from './individual-local-storage-repository.service';

describe('IndividualLocalStorageRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndividualLocalStorageRepositoryService]
    });
  });

  it('should be created', inject([IndividualLocalStorageRepositoryService], (service: IndividualLocalStorageRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
