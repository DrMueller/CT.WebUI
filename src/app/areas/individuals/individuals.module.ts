import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NgBaseDirectivesModule } from '@drmueller/ng-base-directives';
import { DATA_PROVIDER_TOKEN, DTO_ADAPTER_TOKEN } from '@drmueller/ng-base-services';
import { NgMaterialExtensionsModule } from '@drmueller/ng-material-extensions';
import { NgRxForms2Module } from '@drmueller/ng-rx-forms2';

import { IndividualInMemoryProviderService } from './common/mock-data/services';
import { IndividualAdapterService } from './common/mock-data/services/adapters';
import { IndividualRepositoryService } from './common/repositories';
import { IndividualsNavigationService } from './common/services';
import { IndividualDetailsComponent } from './details/components/individual-details';
import { IndividualDetailsResolver } from './details/resolvers';
import {
  IndividualDetailsDataService, IndividualDetailsFormBuilderService
} from './details/services';
import { IndividualsComponent } from './entry-point/components/individuals';
import { IndividualsRoutingModule } from './individuals-routing.module';
import { IndividualsOverviewComponent } from './overview/components/individuals-overview';
import {
  IndividualColDefBuilderService, IndividualsOverviewDataService
} from './overview/services';

@NgModule({
  imports: [
    CommonModule,
    IndividualsRoutingModule,
    NgMaterialExtensionsModule,
    MatSnackBarModule,
    NgRxForms2Module,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    NgBaseDirectivesModule
  ],
  declarations: [
    IndividualDetailsComponent,
    IndividualsComponent,
    IndividualsOverviewComponent
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
    IndividualColDefBuilderService,
    IndividualDetailsDataService,
    IndividualsNavigationService,
    IndividualsOverviewDataService,
    IndividualDetailsFormBuilderService,
    IndividualRepositoryService,
    IndividualDetailsResolver
  ]
})

export class IndividualsModule {
}
