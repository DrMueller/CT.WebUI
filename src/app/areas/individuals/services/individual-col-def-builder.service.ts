import { Injectable } from '@angular/core';

import {
  ColDefBuilderFactoryService, ColumnDefinitionsContainer
} from '@drmueller/ng-material-extensions';

import { IndividualOverviewDto } from '../dtos';

@Injectable({
  providedIn: 'root'
})
export class IndividualColDefBuilderService {

  public constructor(private builderFactory: ColDefBuilderFactoryService) { }

  public buildDefinitions(): ColumnDefinitionsContainer<IndividualOverviewDto> {
    return this.builderFactory
      .createBuilder<IndividualOverviewDto>()
      .withColumnDefinition('firstName', 'First Name', 'firstName')
      .withColumnDefinition('lastName', 'Last Name', 'lastName')
      .withColumnDefinition('birthdate', 'Birthdate', 'birthdate')
      .build();
  }
}
