import { Injectable } from '@angular/core';

import { IndividualsServicesModule } from '../../individuals-services.module';

import {
  ColumnDefinitionsContainer, ColDefBuilderFactoryService
} from '@drmueller/ng-material-extensions';

import { IndividualOverviewEntryDto } from '../dtos';

@Injectable({
  providedIn: IndividualsServicesModule
})
export class IndividualColDefBuilderService {

  public constructor(private builderFactory: ColDefBuilderFactoryService) { }

  public buildDefinitions(): ColumnDefinitionsContainer<IndividualOverviewEntryDto> {
    return this.builderFactory
      .createBuilder<IndividualOverviewEntryDto>()
      .withColumnDefinition('firstName', 'First Name', 'firstName')
      .withColumnDefinition('lastName', 'Last Name', 'lastName')
      .withColumnDefinition('birthdate', 'Birthdate', 'birthdate')
      .build();
  }
}
