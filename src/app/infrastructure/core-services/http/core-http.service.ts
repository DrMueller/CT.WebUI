import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpBaseService, ObjectFactoryService } from '@drmueller/ng-base-services';
import { AppSettingsProviderService } from '../app-settings';

@Injectable()
export class CoreHttpService extends HttpBaseService {
  public constructor(httpClient: HttpClient,
    objectFactoryService: ObjectFactoryService,
    private appSettingsProvider: AppSettingsProviderService) {
    super(httpClient, objectFactoryService);
  }

  protected async getBaseUrlAsync(): Promise<string> {
    return this.appSettingsProvider.provideAppSettingsAsync().then(s => s.coreServiceBaseUrl);
  }
}
