import { Injectable } from '@angular/core';

import {
  ColDefBuilderFactoryService, ColumnDefinitionsContainer
} from '@drmueller/ng-material-extensions';

import { IndividualOverviewEntryDto } from '../dtos';

@Injectable({
  providedIn: 'root'
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
