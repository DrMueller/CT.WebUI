import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EnvironmentService } from '../environment';
import { HttpBaseService, ObjectFactoryService } from '@drmueller/ng-base-services';

@Injectable()
export class CoreHttpService extends HttpBaseService {
  constructor(httpClient: HttpClient, objectFactoryService: ObjectFactoryService, environmentService: EnvironmentService) {
    super(httpClient, objectFactoryService, environmentService.coreServiceBaseUrl);
  }
}
