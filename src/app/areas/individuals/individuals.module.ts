import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NgBaseDirectivesModule } from '@drmueller/ng-base-directives';
import { NgMaterialExtensionsModule } from '@drmueller/ng-material-extensions';
import { NgRxForms2Module } from '@drmueller/ng-rx-forms2';

import { IndividualDetailsComponent } from './details/components/individual-details';

import { IndividualsComponent } from './entry-point/components/individuals';
import { IndividualsRoutingModule } from './individuals-routing.module';
import { IndividualsServicesModule } from './individuals-services.module';
import { IndividualsOverviewComponent } from './overview/components/individuals-overview';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialExtensionsModule,
    MatSnackBarModule,
    NgRxForms2Module,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    NgBaseDirectivesModule,
    IndividualsServicesModule,
    IndividualsRoutingModule
  ],
  declarations: [
    IndividualDetailsComponent,
    IndividualsComponent,
    IndividualsOverviewComponent
  ]
})

export class IndividualsModule {
}
