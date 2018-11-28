import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NgBaseDirectivesModule } from '@drmueller/ng-base-directives';
import { NgMaterialExtensionsModule } from '@drmueller/ng-material-extensions';
import { NgRxForms2Module } from '@drmueller/ng-rx-forms2';

import * as components from './components';
import * as services from './services';
import { IndividualsRoutingModule } from './individuals-routing.module';
import * as repositories from './repositories';
import * as resolvers from './resolvers';

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
