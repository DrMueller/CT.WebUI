import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgMaterialExtensionsModule } from '@drmueller/ng-material-extensions';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgRxFormsModule } from '@drmueller/ng-rx-forms';

import * as components from './components';
import * as services from './services';
import * as repositories from './repositories';
import * as resolvers from './resolvers';
import { IndividualsRoutingModule } from './individuals-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IndividualsRoutingModule,
    NgMaterialExtensionsModule,
    NgRxFormsModule,
    MatSnackBarModule
  ],
  declarations: [
    components.IndividualDetailsComponent,
    components.IndividualsComponent,
    components.IndividualsOverviewComponent
  ],
  providers: [
    services.IndividualColDefBuilderService,
    services.IndividualDetailsService,
    services.IndividualsNavigationService,
    services.IndividualsOverviewService,
    services.IndividualDetailsFormBuilderService,
    repositories.IndividualRepositoryService,
    resolvers.IndividualDetailsResolver
  ]
})

export class IndividualsModule { }
