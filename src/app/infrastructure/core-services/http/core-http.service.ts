import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpBaseService, ObjectFactoryService } from '@drmueller/ng-base-services';

@Injectable()
export class CoreHttpService extends HttpBaseService {
  constructor(httpClient: HttpClient, objectFactoryService: ObjectFactoryService) {
    super(httpClient, objectFactoryService, 'tra');
  }
}
