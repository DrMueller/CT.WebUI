import { inject, TestBed } from '@angular/core/testing';

import { DTO_ADAPTER_TOKEN } from '@drmueller/ng-base-services';

import { IndividualLocalStorageRepositoryService } from './';
import { IndividualAdapterService } from './adapters/individual-adapter.service';
import { IndividualInMemoryProviderService } from './individual-in-memory-provider.service';

describe('IndividualInMemoryProviderService', () => {
  const repositoryMock = jasmine.createSpyObj<IndividualLocalStorageRepositoryService>(['modelIdProperty']);
  const adapterServiceMock = jasmine.createSpyObj<IndividualAdapterService>(['collectionName']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IndividualInMemoryProviderService,
        {
          provide: IndividualLocalStorageRepositoryService,
          useValue: repositoryMock
        },
        {
          provide: DTO_ADAPTER_TOKEN,
          multi: true,
          useValue: adapterServiceMock
        },
      ]
    });
  });

  it('should be created', inject([IndividualInMemoryProviderService], (service: IndividualInMemoryProviderService) => {
    expect(service).toBeTruthy();
  }));
});
