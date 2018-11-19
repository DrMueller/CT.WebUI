import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpBaseService, ObjectFactoryService } from '@drmueller/ng-base-services';

@Injectable()
export class LocalHttpService extends HttpBaseService {
  public constructor(httpClient: HttpClient, objectFactoryService: ObjectFactoryService) {
    super(httpClient, objectFactoryService);
  }

  protected getBaseUrlAsync(): Promise<string> {
    return Promise.resolve('');
  }
}
