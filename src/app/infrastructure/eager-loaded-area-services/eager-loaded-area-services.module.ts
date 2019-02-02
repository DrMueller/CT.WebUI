import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DATA_PROVIDER_TOKEN, DTO_ADAPTER_TOKEN } from '@drmueller/ng-base-services';

import {
  IndividualInMemoryProviderService, IndividualLocalStorageRepositoryService
} from 'src/app/areas/individuals/common/mock-data/services';
import {
  IndividualAdapterService
} from 'src/app/areas/individuals/common/mock-data/services/adapters/individual-adapter.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: DATA_PROVIDER_TOKEN,
      multi: true,
      useClass: IndividualInMemoryProviderService
    },
    {
      provide: DTO_ADAPTER_TOKEN,
      multi: true,
      useClass: IndividualAdapterService
    },
    IndividualLocalStorageRepositoryService
  ]
})

export class EagerLoadedAreaServicesModule { }
