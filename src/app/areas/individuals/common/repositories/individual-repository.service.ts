import { Injectable } from '@angular/core';

import { RepositoryBaseService } from '@drmueller/ng-data-access';
import { CoreHttpService } from 'src/app/infrastructure/core-services/http';
import { IndividualsServicesModule } from '../../individuals-services.module';
import { Individual } from '../models';

@Injectable({
  providedIn: IndividualsServicesModule
})
export class IndividualRepositoryService extends RepositoryBaseService<Individual> {
  public static readonly RelativeUrlPath = 'individuals';

  public constructor(coreHttpService: CoreHttpService) {
    super(coreHttpService, Individual, IndividualRepositoryService.RelativeUrlPath);
  }
}
