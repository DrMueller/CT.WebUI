import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppSettingsProviderService, HttpBaseService, ObjectFactoryService } from '@drmueller/ng-base-services';
import { AppSettings } from '../app-settings';

@Injectable({
  providedIn: 'root'
})
export class CoreHttpService extends HttpBaseService {
  private static readonly relativeJsonFilePath = './assets/app-settings/appsettings.json';

  public constructor(httpClient: HttpClient,
    objectFactoryService: ObjectFactoryService,
    private appSettingsProvider: AppSettingsProviderService<AppSettings>) {
    super(httpClient, objectFactoryService);
  }

  protected async getBaseUrlAsync(): Promise<string> {
    return this.appSettingsProvider
      .provideAppSettingsAsync(CoreHttpService.relativeJsonFilePath)
      .then(s => s.coreServiceBaseUrl);
  }
}
