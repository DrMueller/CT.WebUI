import { Injectable } from '@angular/core';

import { RepositoryBaseService } from '@drmueller/ng-data-access';
import { CoreHttpService } from '../../../infrastructure/core-services';
import { Individual } from '../models';

@Injectable()
export class IndividualRepositoryService extends RepositoryBaseService<Individual> {
  public constructor(coreHttpService: CoreHttpService) {
    super(coreHttpService, Individual, 'individuals');
  }
}
