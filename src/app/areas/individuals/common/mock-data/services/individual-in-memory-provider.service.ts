import { Inject, Injectable } from '@angular/core';
import {
  BaseInMemoryDataProviderService, DTO_ADAPTER_TOKEN, IDtoAdapterService
} from '@drmueller/ng-base-services';

import { Individual } from '../../models';

import { IndividualLocalStorageRepositoryService } from './individual-local-storage-repository.service';

@Injectable()
export class IndividualInMemoryProviderService extends BaseInMemoryDataProviderService<Individual> {
  public constructor(
    repository: IndividualLocalStorageRepositoryService,
    @Inject(DTO_ADAPTER_TOKEN) adapters: IDtoAdapterService<Individual, any>[]
  ) {
    super(repository, adapters);
  }

  protected get keyProperty(): keyof Individual {
    return 'id';
  }

  protected get modelTypeName(): string {
    return Individual.ModelName;
  }
}
