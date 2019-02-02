import { Injectable } from '@angular/core';

import { IDtoAdapterService } from '@drmueller/ng-base-services';

import { Individual } from '../../../models';
import { IndividualRepositoryService } from '../../../repositories/individual-repository.service';

@Injectable()
export class IndividualAdapterService implements IDtoAdapterService<Individual, Individual> {
  public get collectionName(): string {
    return IndividualRepositoryService.RelativeUrlPath;
  }

  public get dtoIdProperty(): keyof Individual {
    return 'id';
  }
  public get modelTypeName(): string {
    return Individual.ModelName;
  }

  public adaptToDto(model: Individual): Individual {
    return model;
  }

  public applyChangesToModel(dto: Individual, model: Individual): void {
    Object.assign(model, dto);
  }

  public createModel(dto: Individual): Individual {
    return dto;
  }
}
